import Image from "next/image";
import { Reveal, RevealSide } from "@/components/reveal";
import { sectionPaddingX, sectionPaddingY } from "@/lib/style";
import { cn } from "cn";

export function AboutHero() {
  return (
    <section className="w-full">
      <div
        className={cn(
          "mx-auto flex flex-col gap-10 md:pt-16 lg:flex-row lg:items-center lg:gap-16 lg:pb-10",
          sectionPaddingX,
          sectionPaddingY,
        )}
      >
        <div className="flex min-w-0 flex-1 flex-col gap-6">
          <Reveal>
            <h1 className="text-2xl font-extrabold leading-tight text-brand-black sm:text-3xl lg:text-4xl">
              ساینسینو؛ جایی برای کشف، یادگیری و ساختن{" "}
              <span className="text-brand-blue-active">آینده</span>
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-base font-medium leading-8 text-brand-black lg:text-lg">
              ما باور داریم آینده را کسانی می‌سازند که می‌آموزند، تجربه می‌کنند
              و از پرسیدن و کشف کردن نمی‌ترسند.
            </p>
          </Reveal>
        </div>
        <Reveal
          side={RevealSide.LEFT}
          delay={150}
          duration={700}
          className="w-full lg:flex-1"
        >
          <Image
            src="/images/robotics.png"
            alt="کودکان در حال یادگیری علوم و فناوری"
            width={1120}
            height={747}
            className="h-auto w-full"
            priority
          />
        </Reveal>
      </div>
    </section>
  );
}
