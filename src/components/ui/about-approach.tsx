import { Reveal } from "@/components/reveal";
import { aboutSteam } from "@/items/about";
import {
  onDarkBodyText,
  radius,
  sectionMarginY,
  sectionPaddingX,
  sectionTitleOnDark,
} from "@/lib/style";
import { cn } from "cn";

const bodyOnDark = cn(onDarkBodyText, "leading-7 lg:text-base");

export function AboutApproach() {
  return (
    <section className={cn("w-full bg-brand-blue-active md:rounded-[62px]", radius.section)}>
      <div
        className={cn(
          "grid gap-12 py-14 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-20",
          sectionPaddingX,
          sectionMarginY,
        )}
      >
        <div className="flex flex-col gap-5">
          <Reveal>
            <h2 className={sectionTitleOnDark}>رویکرد آموزشی ما</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-base font-bold leading-8 text-white lg:text-lg">
              در ساینسینو، یادگیری فرآیندی فعال، هدفمند و مبتنی بر مشارکت است.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className={bodyOnDark}>
              یکی از رویکردهای اصلی ما، بهره‌گیری از چارچوب آموزشی STEAM است؛
              رویکردی میان‌رشته‌ای که علوم، فناوری، مهندسی، هنر و ریاضیات را در
              کنار یکدیگر قرار می‌دهد تا یادگیرندگان بتوانند مفاهیم علمی را در
              ارتباط با مسائل واقعی تجربه کنند.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p className={bodyOnDark}>
              ما تلاش می‌کنیم در محیطی پویا، انگیزه‌بخش و متناسب با ویژگی‌های هر
              گروه سنی، فرصت تجربه کردن، آزمودن ایده‌ها، یادگیری از اشتباهات و
              توسعه توانمندی‌های فردی را فراهم آوریم.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <p className={bodyOnDark}>
              در این مسیر، نقش مدرس تنها انتقال‌دهنده اطلاعات نیست؛ بلکه راهنما
              و تسهیلگری است که مسیر کشف و یادگیری را برای فراگیران هموار
              می‌سازد.
            </p>
          </Reveal>
        </div>
        <div
          dir="ltr"
          className="flex flex-wrap items-start justify-center gap-6 sm:gap-8"
        >
          {aboutSteam.map((item, index) => (
            <Reveal key={item.id} delay={index * 120}>
              <div className="flex flex-col items-center gap-3">
                <span
                  className={cn(
                    "grid size-20 place-items-center rounded-full text-3xl font-extrabold shadow-lg shadow-black/20 transition-transform duration-300 hover:scale-110 sm:size-24",
                    item.className,
                  )}
                >
                  {item.letter}
                </span>
                <span className="text-sm font-bold text-white">
                  {item.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
