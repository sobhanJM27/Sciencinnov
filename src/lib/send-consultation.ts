import { ConsultationPayload } from "@/types/consultation";

const GENERIC_ERROR = "مشکلی پیش آمد. لطفاً دوباره تلاش کنید.";

export async function sendConsultation(payload: ConsultationPayload) {
  let response: Response;
  try {
    response = await fetch("/api/consultation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new Error("اتصال به اینترنت برقرار نیست.");
  }

  if (!response.ok) {
    const data = (await response.json().catch(() => null)) as {
      message?: string;
    } | null;
    throw new Error(data?.message ?? GENERIC_ERROR);
  }
}
