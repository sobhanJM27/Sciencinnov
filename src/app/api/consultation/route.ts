import { NextResponse, after } from "next/server";
import type { ResultSetHeader, RowDataPacket } from "mysql2/promise";
import { db } from "@/lib/db";
import { sendConsultationEmail } from "@/lib/mailer";

export const runtime = "nodejs";

const MAX_REQUESTS_PER_HOUR = 10;

const PERSIAN_DIGITS = "۰۱۲۳۴۵۶۷۸۹";
const ARABIC_DIGITS = "٠١٢٣٤٥٦٧٨٩";

function toEnglishDigits(value: string) {
  return value
    .replace(/[۰-۹]/g, (d) => String(PERSIAN_DIGITS.indexOf(d)))
    .replace(/[٠-٩]/g, (d) => String(ARABIC_DIGITS.indexOf(d)));
}

function clean(value: unknown, maxLength: number) {
  return typeof value === "string"
    ? value.replace(/\s+/g, " ").trim().slice(0, maxLength)
    : "";
}

function fail(status: number, message: string) {
  return NextResponse.json({ ok: false, message }, { status });
}

function getClientIp(request: Request) {
  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp.trim().slice(0, 45);

  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim().slice(0, 45);

  return null;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return fail(400, "درخواست نامعتبر است.");
  }

  const fullName = clean(body.fullName, 100);
  const phone = toEnglishDigits(clean(body.phone, 30)).replace(/[\s-]/g, "");
  const age = toEnglishDigits(clean(body.age, 3));
  const source = body.source === "popup" ? "popup" : "footer";

  if (fullName.length < 2) {
    return fail(400, "لطفاً نام و نام خانوادگی را وارد کنید.");
  }
  if (!/^\+?\d{8,15}$/.test(phone)) {
    return fail(400, "شماره تماس واردشده معتبر نیست.");
  }
  if (age && !/^\d{1,2}$/.test(age)) {
    return fail(400, "سن دانش‌آموز معتبر نیست.");
  }

  const ip = getClientIp(request);
  let requestId = 0;

  try {
    if (ip) {
      const [rows] = await db.query<RowDataPacket[]>(
        `SELECT COUNT(*) AS total
           FROM consultation_requests
          WHERE ip_address = ? AND created_at > (NOW() - INTERVAL 1 HOUR)`,
        [ip],
      );
      if (Number(rows[0]?.total ?? 0) >= MAX_REQUESTS_PER_HOUR) {
        return fail(
          429,
          "تعداد درخواست‌ها زیاد است. لطفاً کمی بعد دوباره تلاش کنید.",
        );
      }
    }

    const [result] = await db.execute<ResultSetHeader>(
      `INSERT INTO consultation_requests (full_name, phone, age, source, ip_address)
       VALUES (?, ?, ?, ?, ?)`,
      [fullName, phone, age ? Number(age) : null, source, ip],
    );
    requestId = result.insertId;
  } catch (error) {
    console.error("[consultation] خطا در دیتابیس:", error);
    return fail(500, "ثبت درخواست ناموفق بود. لطفاً دوباره تلاش کنید.");
  }

  after(async () => {
    try {
      await sendConsultationEmail({
        id: requestId,
        fullName,
        phone,
        age: age || undefined,
        source,
      });
      await db.execute(
        "UPDATE consultation_requests SET email_sent = 1 WHERE id = ?",
        [requestId],
      );
    } catch (error) {
      console.error(
        `[consultation] ایمیل درخواست #${requestId} ارسال نشد:`,
        error,
      );
    }
  });

  return NextResponse.json({ ok: true });
}
