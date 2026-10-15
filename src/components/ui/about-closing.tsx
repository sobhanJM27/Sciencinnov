import { ConsultationPopup } from "@/components/consultation-popup";
import { Reveal } from "@/components/reveal";
import {
  bodyText,
  radius,
  sectionMarginY,
  sectionPaddingX,
  sectionTitle,
} from "@/lib/style";
import { cn } from "cn";

export function AboutClosing() {
  return (
    <section
      className={cn(
        "w-full bg-brand-surface md:rounded-[62px]",
        sectionMarginY,
        radius.section,
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-4xl flex-col items-center gap-6 py-14 text-center lg:py-20",
          sectionPaddingX,
        )}
      >
        <Reveal>
          <h2 className={sectionTitle}>همراه ما، آینده را بسازید</h2>
        </Reveal>
        <Reveal delay={100}>
          <p className={bodyText}>
            در ساینسینو باور داریم هر استعداد، فرصتی برای شکوفایی است و هر تجربه
            یادگیری می‌تواند آغاز مسیری تازه باشد.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <p className={bodyText}>
            ما در کنار یادگیرندگان، خانواده‌ها، مدرسان و همراهان علمی خود تلاش
            می‌کنیم محیطی بسازیم که در آن دانش به مهارت، ایده به تجربه و خلاقیت
            به نوآوری تبدیل شود.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <p className="text-2xl font-extrabold leading-relaxed text-brand-black lg:text-4xl">
            ساینسینو؛ <span className="text-brand-green-dark">کشف کن،</span>{" "}
            <span className="text-brand-blue-deep">یاد بگیر،</span>{" "}
            <span className="text-brand-red">پیشرفت کن،</span>{" "}
            <span className="text-brand-blue-active">آینده‌ات را بساز.</span>
          </p>
        </Reveal>
        <Reveal delay={400}>
          <ConsultationPopup />
        </Reveal>
      </div>
    </section>
  );
}
