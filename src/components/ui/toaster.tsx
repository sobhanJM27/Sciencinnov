"use client";

import { Toaster as Sonner } from "sonner";

export function Toaster() {
  return (
    <Sonner
      dir="rtl"
      position="top-center"
      richColors
      toastOptions={{
        style: {
          fontFamily: '"Iranian-Sans", sans-serif',
          borderRadius: "12px",
          border: "1px solid rgba(0, 146, 172, 0.2)",
          boxShadow: "0 10px 25px -5px rgba(3, 67, 117, 0.1)",
        },
        classNames: {
          success:
            "!bg-[var(--brand-green-light3)] !text-[var(--brand-green-dark)] !border-[var(--brand-green)]",
          error:
            "!bg-[var(--brand-pink)] !text-[var(--brand-red)] !border-[var(--brand-red)]",
          info: "!bg-[var(--brand-gray)] !text-[var(--brand-navy)] !border-[var(--brand-blue)]",
        },
      }}
    />
  );
}
