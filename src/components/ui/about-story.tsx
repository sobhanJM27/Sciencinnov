import { Reveal } from "@/components/reveal";
import {
  bodyText,
  radius,
  sectionPaddingX,
  sectionPaddingY,
} from "@/lib/style";
import { cn } from "cn";

export function AboutStory() {
  return (
    <section className="w-full">
      <div
        className={cn(
          "mx-auto grid gap-10 lg:grid-cols-[3fr_2fr] lg:items-center lg:gap-16",
          sectionPaddingX,
          sectionPaddingY,
        )}
      >
        <div className="flex flex-col gap-5">
          <Reveal>
            <p className={bodyText}>
              آکادمی آموزش مهارت‌محور علوم و فناوری‌های نوین ساینسینو
              (Sciencinnov) با هدف ایجاد پیوندی مؤثر میان دانش، خلاقیت و
              مهارت‌های کاربردی شکل گرفته است؛ مجموعه‌ای علمی و آموزشی که
              می‌کوشد فراتر از شیوه‌های مرسوم تدریس، بستری پویا برای یادگیری
              عمیق، پرورش استعدادها و توسعه توانمندی‌های فردی و تخصصی فراهم
              آورد.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <p className={bodyText}>
              ساینسینو با همراهی جمعی از دانش‌آموختگان، اعضای هیئت علمی،
              پژوهشگران و متخصصان دانشگاه‌های معتبر کشور، از جمله دانشگاه صنعتی
              شریف، دانشگاه فردوسی مشهد، دانشگاه خوارزمی و دانشگاه علوم پزشکی
              مشهد، فعالیت می‌کند. پشتوانه علمی این مجموعه در کنار تجربه آموزش و
              پژوهش، زمینه‌ای برای طراحی و اجرای دوره‌هایی فراهم کرده است که
              دانش نظری را با تجربه عملی و نیازهای دنیای امروز پیوند می‌دهند.
            </p>
          </Reveal>
        </div>

        <Reveal delay={300}>
          <blockquote
            className={cn(
              "relative border-s-4 border-brand-green bg-brand-surface p-8",
              radius.card,
            )}
          >
            <span
              aria-hidden
              className="absolute -top-4 inset-e-6 text-7xl font-extrabold leading-none text-brand-green"
            >
              «
            </span>
            <p className="text-lg font-extrabold leading-9 text-brand-blue-active">
              ما در ساینسینو معتقدیم آموزش زمانی اثربخش است که یادگیرنده بتواند
              آموخته‌های خود را به تجربه، خلاقیت و توانایی حل مسائل واقعی تبدیل
              کند.
            </p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
