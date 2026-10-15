import { Reveal } from "@/components/reveal";
import { aboutActivities } from "@/items/about";
import {
  bodyText,
  cardHover,
  radius,
  sectionPaddingX,
  sectionPaddingY,
  sectionSubtitle,
  sectionTitle,
} from "@/lib/style";
import { cn } from "cn";

export function AboutActivities() {
  return (
    <section className="w-full">
      <div
        className={cn(
          "mx-auto flex flex-col gap-10",
          sectionPaddingX,
          sectionPaddingY,
        )}
      >
        <Reveal className="flex flex-col gap-2">
          <h2 className={sectionTitle}>حوزه‌های فعالیت ساینسینو</h2>
          <p className={sectionSubtitle}>
            فعالیت‌های آموزشی ساینسینو مجموعه‌ای از حوزه‌های علمی و مهارتی را در
            بر می‌گیرد:
          </p>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {aboutActivities.map((activity, index) => (
            <Reveal
              key={activity.id}
              delay={(index % 3) * 120}
              className="h-full"
            >
              <div
                className={cn(
                  "flex h-full flex-col gap-4 p-6",
                  activity.cardClassName,
                  cardHover,
                  radius.card,
                )}
              >
                <span
                  className={cn(
                    "grid size-12 place-items-center rounded-full text-lg font-extrabold",
                    activity.numberClassName,
                  )}
                >
                  {(index + 1).toLocaleString("fa-IR")}
                </span>
                <h3 className="text-lg font-extrabold text-brand-black">
                  {activity.title}
                </h3>
                <p className={bodyText}>{activity.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
