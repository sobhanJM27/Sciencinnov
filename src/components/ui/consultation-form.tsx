"use client";

import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { sendConsultation } from "@/lib/send-consultation";
import { Input } from "./input";

export function ConsultationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setIsSubmitting(true);
    try {
      await sendConsultation({
        fullName: String(data.get("fullName") ?? ""),
        phone: String(data.get("phone") ?? ""),
        source: "footer",
      });
      toast.success("درخواست شما ثبت شد", {
        description: "به‌زودی همکاران ما با شما تماس می‌گیرند.",
      });
      form.reset();
    } catch (error) {
      toast.error("ارسال درخواست انجام نشد", {
        description:
          error instanceof Error ? error.message : "لطفاً دوباره تلاش کنید.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-4 md:w-64 md:self-end"
    >
      <Input
        name="fullName"
        placeholder="نام و نام خانوادگی شما"
        autoComplete="name"
        required
      />
      <Input
        name="phone"
        inputMode="tel"
        placeholder="شماره تماس"
        autoComplete="tel"
        required
      />
      <Button type="submit" className="w-full!" disabled={isSubmitting}>
        {isSubmitting ? "در حال ارسال..." : "دریافت مشاوره"}
      </Button>
    </form>
  );
}