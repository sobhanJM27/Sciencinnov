import { ConsultationEmailData } from "@/types/consultation";
import nodemailer, { type Transporter } from "nodemailer";

const SOURCE_LABELS = {
  popup: "پاپ‌آپ صفحه‌ی اصلی",
  footer: "فرم فوتر",
} as const;

let cachedTransporter: Transporter | null = null;

function getTransporter() {
  if (cachedTransporter) return cachedTransporter;

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    throw new Error(
      "تنظیمات SMTP کامل نیست (SMTP_HOST, SMTP_USER, SMTP_PASS).",
    );
  }

  const port = Number(SMTP_PORT ?? 465);
  cachedTransporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 20_000,
  });
  return cachedTransporter;
}

export async function sendConsultationEmail(data: ConsultationEmailData) {
  const { MAIL_TO, MAIL_FROM, SMTP_USER } = process.env;
  if (!MAIL_TO) throw new Error("MAIL_TO تنظیم نشده است.");

  const receivedAt = new Intl.DateTimeFormat("fa-IR", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Asia/Tehran",
  }).format(new Date());

  const lines = [
    "یک درخواست مشاوره‌ی جدید ثبت شد:",
    "",
    `نام و نام خانوادگی: ${data.fullName}`,
    `شماره تماس: ${data.phone}`,
    ...(data.age ? [`سن دانش‌آموز: ${data.age}`] : []),
    "",
    `ثبت‌شده از: ${SOURCE_LABELS[data.source]}`,
    `زمان: ${receivedAt}`,
    `شناسه‌ی درخواست در دیتابیس: ${data.id}`,
  ];

  await getTransporter().sendMail({
    from: MAIL_FROM ?? SMTP_USER,
    to: MAIL_TO,
    subject: `درخواست مشاوره‌ی جدید: ${data.fullName}`,
    text: lines.join("\n"),
  });
}
