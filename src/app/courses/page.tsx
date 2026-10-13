import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export default function CoursesPage() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center bg-brand-surface px-6 py-12 text-center">
      <div className="max-w-lg rounded-3xl bg-brand-surface-dark p-10 shadow-2xl border border-brand-green-light3 relative overflow-hidden">
        <div className="absolute -top-12 -right-12 size-36 bg-brand-green-light3 rounded-full blur-2xl opacity-60 pointer-events-none" />

        <div className="inline-flex items-center justify-center size-16 rounded-2xl bg-brand-green-light3 text-brand-green mb-6 shadow-inner">
          <Sparkles className="size-8" />
        </div>

        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-brand-gray text-brand-blue mb-3">
          به زودی...
        </span>

        <h1 className="text-3xl font-extrabold text-brand-navy tracking-tight">
          دوره‌های آموزشی تخصصی
        </h1>

        <p className="mt-4 text-brand-black-light leading-relaxed text-sm sm:text-base">
          ما در حال آماده‌سازی دوره‌های بی‌نظیر و کاربردی برای شما هستیم. این
          صفحه به‌زودی با امکانات و محتوای کامل تکمیل خواهد شد.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/">
            <Button
              variant="outline"
              className="border-brand-blue text-brand-navy hover:bg-brand-gray w-full sm:w-auto"
            >
              بازگشت به صفحه اصلی
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
