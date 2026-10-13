import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-brand-surface px-6 text-center">
      <div className="max-w-md rounded-3xl bg-brand-surface-dark p-8 shadow-xl border border-brand-blue-light2">
        <span className="text-6xl font-black text-brand-blue">
          404
        </span>
        <h1 className="mt-4 text-2xl font-bold text-brand-navy">
          صفحه‌ای که دنبالش بودید پیدا نشد!
        </h1>
        <p className="mt-2 text-sm text-brand-black-light leading-relaxed">
          شاید این صفحه جابه‌جا شده یا آدرس رو اشتباه وارد کردید. نگران نباشید،
          می‌تونید به صفحه اصلی برگردید.
        </p>
        <div className="mt-6 flex justify-center">
          <Link href="/">
            <Button className="bg-brand-blue hover:bg-brand-blue-deep text-white px-6 py-3 rounded-xl transition-all">
              بازگشت به صفحه اصلی
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
