import { goals } from "@/items/goals";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { sectionPaddingX, sectionTitleOnDark } from "@/lib/style";
import { cn } from "cn";

export function Goals() {
  return (
    <section className="w-full bg-brand-blue-active rounded-[62px]">
      <div
        className={cn(
          "grid grid-cols-1 gap-10 py-14 md:grid-cols-2 md:gap-x-10 md:py-16 lg:grid-cols-4 lg:gap-14 lg:py-20",
          sectionPaddingX,
        )}
      >
        <div className="flex flex-col gap-4">
          <h2 className={sectionTitleOnDark}>هدف ما</h2>
          <p className="text-sm text-brand-surface-dark/90">
            تبدیل یادگیری به تجربه‌ای جذاب و الهام‌بخش است؛ جایی که کودکان با
            کشف کردن، ساختن و حل مسئله، خلاقیت و استعدادهای خود را شکوفا کنند،
            تجربه و مهارت‌های لازم برای ساختن آینده‌ای بهتر را بیاموزند.
          </p>
        </div>
        {goals.map((feature, index) => (
          <Reveal
            key={feature.id}
            delay={(index + 1) * 200}
            className="flex flex-col gap-4 lg:border-s-2 lg:border-brand-blue lg:ps-8"
          >
            <div className="relative h-12 w-12 shrink-0">
              <Image
                src={feature.icon}
                alt={feature.title}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-extrabold text-white lg:text-2xl">
              {feature.title}
            </h3>
            <p className="text-sm leading-7 text-brand-surface-dark/90">
              {feature.description}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
