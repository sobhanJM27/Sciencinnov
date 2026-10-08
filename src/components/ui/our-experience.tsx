import { StatCounter } from "@/components/ui/stat-counter";
import { stats } from "@/items/stats";
import { GalleryImage } from "./gallery-image";
import { cn } from "@/lib/utils";
import { sectionPaddingX, sectionTitle } from "@/lib/style";

const experiences = [
  "/images/experience-1.png",
  "/images/experience-2.png",
  "/images/experience-3.png",
  "/images/experience-4.png",
  "/images/experience-5.png",
  "/images/experience-6.png",
  "/images/experience-7.png",
  "/images/experience-8.png",
];

export function OurExperience() {
  return (
    <section id="experience" className="w-full">
      <div className={cn("flex flex-col gap-10 py-10", sectionPaddingX)}>
        <h2 className={sectionTitle}>تجربه‌ی ساینسینو</h2>
        <div className="grid grid-cols-3 gap-4 sm:gap-1">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="flex mx-auto aspect-square w-full max-w-50 flex-col items-center justify-center gap-1 rounded-full bg-brand-pink text-center p-4 sm:gap-2"
            >
              <StatCounter
                target={stat.target}
                prefix="+"
                delay={index * 200}
                className="font-extrabold text-brand-black sm:text-2xl lg:text-3xl"
              />
              <span className="text-xs font-bold text-brand-black-light sm:text-base">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 md:aspect-4/1 md:grid-cols-[381fr_318fr_121fr_192fr_123fr] md:grid-rows-1">
        <GalleryImage src={experiences[0]} alt="تجربه ساینسینو ۱" />

        <div className="contents md:grid md:grid-rows-[1fr_1.2fr] md:gap-2">
          <GalleryImage src={experiences[1]} alt="تجربه ساینسینو ۲" />
          <GalleryImage src={experiences[2]} alt="تجربه ساینسینو ۳" />
        </div>

        <div className="contents md:grid md:grid-rows-[1fr_1fr] md:gap-2">
          <GalleryImage src={experiences[3]} alt="تجربه ساینسینو ۴" />
          <GalleryImage src={experiences[4]} alt="تجربه ساینسینو ۵" />
        </div>

        <GalleryImage src={experiences[5]} alt="تجربه ساینسینو ۶" />

        <div className="contents md:grid md:grid-rows-[1fr_1fr] md:gap-2">
          <GalleryImage src={experiences[6]} alt="تجربه ساینسینو ۷" />
          <GalleryImage src={experiences[7]} alt="تجربه ساینسینو ۸" />
        </div>
      </div>
    </section>
  );
}
