import { Reveal } from "@/components/reveal";
import {
  bodyText,
  cardHover,
  radius,
  sectionPaddingX,
  sectionPaddingY,
} from "@/lib/style";
import { cn } from "cn";

export function AboutPurpose() {
  return (
    <section className="w-full">
      <div
        className={cn(
          "mx-auto grid gap-6 lg:grid-cols-2 lg:gap-8",
          sectionPaddingX,
          sectionPaddingY,
        )}
      >
        <Reveal className="h-full">
          <div
            className={cn(
              "flex h-full flex-col gap-4 bg-brand-green/10 p-6 sm:p-8 lg:p-10",
              cardHover,
              radius.card,
            )}
          >
            <span className="h-1.5 w-12 rounded-full bg-brand-green" />
            <h2 className="text-2xl font-extrabold text-brand-black lg:text-3xl">
              مأموریت ما
            </h2>
            <p className={bodyText}>
              مأموریت ساینسینو، فراهم کردن فرصت‌های آموزشی باکیفیت، کاربردی و
              الهام‌بخش برای کودکان، نوجوانان، دانش‌آموزان، دانشجویان و
              علاقه‌مندان به یادگیری است.
            </p>
            <p className={bodyText}>
              ما تلاش می‌کنیم با بهره‌گیری از روش‌های نوین آموزشی، آموزش
              پروژه‌محور و فعالیت‌های تعاملی، زمینه رشد تفکر تحلیلی، خلاقیت، حل
              مسئله، کار گروهی و مهارت‌های فناورانه را فراهم کنیم.
            </p>
            <p className="text-sm font-bold leading-7 text-brand-black lg:text-base">
              هدف ما صرفاً انتقال دانش نیست؛ بلکه می‌خواهیم یادگیرندگان را برای
              اندیشیدن مستقل، مواجهه با چالش‌های جدید و خلق راه‌حل‌های نوآورانه
              توانمند سازیم.
            </p>
          </div>
        </Reveal>

        <Reveal delay={200} className="h-full">
          <div
            className={cn(
              "flex h-full flex-col gap-4 bg-brand-blue-light2/40 p-6 sm:p-8 lg:p-10",
              cardHover,
              radius.card,
            )}
          >
            <span className="h-1.5 w-12 rounded-full bg-brand-blue-deep" />
            <h2 className="text-2xl font-extrabold text-brand-black lg:text-3xl">
              چشم‌انداز ما
            </h2>
            <p className={bodyText}>
              چشم‌انداز ساینسینو، تبدیل‌شدن به یکی از مجموعه‌های پیشرو در آموزش
              مهارت‌محور علوم و فناوری‌های نوین است؛ مجموعه‌ای که بتواند با تکیه
              بر دانش روز، نوآوری آموزشی و همکاری با مراکز علمی و پژوهشی،
              فرصت‌های یادگیری اثربخش و در دسترس ایجاد کند.
            </p>
            <p className="text-sm font-bold leading-7 text-brand-black lg:text-base">
              ما آینده‌ای را تصور می‌کنیم که در آن آموزش محدود به کتاب‌های درسی
              و کلاس‌های سنتی نباشد و هر فرد بتواند متناسب با استعدادها و
              علاقه‌مندی‌های خود، مسیر رشد علمی و حرفه‌ای‌اش را آگاهانه انتخاب
              کند.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
