import Image from "next/image";
import { Reveal, RevealSide } from "@/components/reveal";
import { ConsultationPopup } from "../consultation-popup";
import { cn } from "cn";
import { sectionPaddingX } from "@/lib/style";

export function Hero() {
  return (
    <section className="w-full">
      <div
        className={cn(
          "flex mx-auto flex-col gap-10 py-10 tablet:flex-row lg:gap-16 md:pt-16 md:pb-10",
          sectionPaddingX,
        )}
      >
        <div className="flex min-w-0 flex-col gap-6 md:justify-between">
          <div className="flex flex-col gap-6">
            <Reveal>
              <h1 className="text-2xl font-extrabold leading-tight text-brand-black sm:text-3xl lg:text-4xl">
                یادگیری امروز
                <br />
                موجب فرصت‌های{" "}
                <span className="text-brand-blue-active">فردا</span>
                ست...
              </h1>
            </Reveal>
            <div className="flex flex-col gap-16">
              <Reveal delay={150}>
                <p className="text-base leading-8 text-brand-black lg:text-lg font-medium">
                  آکادمی آموزش مهارت‌محور علوم و فناوری بر پایه متدهای
                  <br />
                  نوین برای کودکان و نوجوانان.
                  <br />
                  ارمغان‌آورنده‌ی لذت تجربه و دانایی و سرمایه‌گذاری روی
                  <br />
                  آینده فرزندان این سرزمین.
                </p>
              </Reveal>
              <Reveal delay={300} className="self-end">
                <ConsultationPopup />
              </Reveal>
            </div>
          </div>
        </div>
        <Reveal
          side={RevealSide.LEFT}
          delay={150}
          duration={700}
          className="w-full md:flex-1"
        >
          <Image
            src="/images/hero-illustration.png"
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
