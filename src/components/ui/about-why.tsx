import { Reveal } from "@/components/reveal";
import { aboutPillars } from "@/items/about";
import {
  bodyText,
  sectionPaddingX,
  sectionPaddingY,
  sectionSubtitle,
  sectionTitle,
} from "@/lib/style";
import { cn } from "cn";

export function AboutWhy() {
  return (
    <section className="w-full">
      <div
        className={cn(
          "mx-auto flex flex-col gap-10",
          sectionPaddingX,
          sectionPaddingY,
        )}
      >
        <Reveal className="flex flex-col gap-2">
          <h2 className={sectionTitle}>چرا ساینسینو؟</h2>
          <p className={sectionSubtitle}>
            آنچه ساینسینو را متمایز می‌کند، تلاش برای ایجاد ارتباط میان سه عنصر
            اساسی است:
          </p>
        </Reveal>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          {aboutPillars.map((pillar, index) => (
            <div key={pillar.id} className="contents">
              {index > 0 && (
                <span
                  aria-hidden
                  className="text-4xl font-bold text-brand-black-light"
                >
                  +
                </span>
              )}
              <Reveal delay={index * 150}>
                <span
                  className={cn(
                    "grid size-36 place-items-center rounded-full p-4 text-center text-lg font-extrabold transition-transform duration-300 hover:scale-105 sm:size-40 lg:size-48 lg:text-xl",
                    pillar.className,
                  )}
                >
                  {pillar.label}
                </span>
              </Reveal>
            </div>
          ))}
        </div>

        <div className="grid gap-5 lg:grid-cols-2 lg:gap-10">
          <Reveal>
            <p className={bodyText}>
              حضور متخصصان دانشگاهی، توجه به آموزش تعاملی و پروژه‌محور، طراحی
              مسیرهای یادگیری متناسب با گروه‌های سنی مختلف و تأکید بر مهارت‌های
              آینده، از مهم‌ترین ویژگی‌های رویکرد آموزشی ماست.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <p className={bodyText}>
              ما تلاش می‌کنیم فضایی ایجاد کنیم که در آن کنجکاوی ارزشمند باشد،
              پرسشگری تشویق شود و هر تجربه آموزشی، گامی در مسیر رشد و
              توانمندسازی باشد.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
