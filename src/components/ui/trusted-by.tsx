import Image from "next/image";
import { Marquee } from "./marquee";
import { partners } from "@/items/partners";
import { sectionPaddingX, sectionTitle } from "@/lib/style";
import { cn } from "@/lib/utils";
export function TrustedBy() {
  return (
    <section className="w-full">
      <div
        className={cn(
          "flex flex-col gap-12 py-10 md:py-16 lg:py-20",
          sectionPaddingX,
        )}
      >
        <h2 className={sectionTitle}>به ساینسینو اعتماد کردند...</h2>
        <Marquee>
          {partners.map((partner) => (
            <Image
              key={partner.id}
              src={partner.logo}
              alt={partner.name}
              width={160}
              height={120}
              className="h-20 w-auto shrink-0 object-contain sm:h-24 lg:h-35"
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
