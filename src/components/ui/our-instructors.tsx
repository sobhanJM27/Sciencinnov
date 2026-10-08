import Image from "next/image";
import { Carousel } from "@/components/ui/carousel";
import { instructors } from "@/items/instructors";
import { Reveal } from "../reveal";
import { sectionPaddingX, sectionSubtitle, sectionTitle } from "@/lib/style";
import { cn } from "cn";

export function OurInstructors() {
  return (
    <section id="instructors" className="w-full">
      <div className={cn("flex flex-col gap-10 py-10", sectionPaddingX)}>
        <div className="flex flex-col gap-2">
          <h2 className={sectionTitle}>
            مدرسان ساینسینو
          </h2>
          <p className={sectionSubtitle}>
            همراهان شما در مسیر شکوفایی فرزندتان
          </p>
        </div>
        <Reveal delay={180}>
          <Carousel>
            {instructors.map((instructor) => (
              <div
                key={instructor.id}
                className="flex mx-auto w-56 shrink-0 snap-start flex-col items-center gap-3 text-center sm:w-64"
              >
                <div className="relative aspect-square w-full overflow-hidden rounded-full">
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-bold text-brand-black">
                    {instructor.name}
                  </h3>
                  <p className="text-sm leading-6 text-brand-black-light">
                    {instructor.title}
                    {instructor.subtitle && (
                      <>
                        <br />
                        {instructor.subtitle}
                      </>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}
