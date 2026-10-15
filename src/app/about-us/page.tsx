import { AboutActivities } from "@/components/ui/about-activities";
import { AboutApproach } from "@/components/ui/about-approach";
import { AboutClosing } from "@/components/ui/about-closing";
import { AboutHero } from "@/components/ui/about-hero";
import { AboutPurpose } from "@/components/ui/about-purpose";
import { AboutStory } from "@/components/ui/about-story";
import { AboutWhy } from "@/components/ui/about-why";
import { mainStyle } from "@/lib/style";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "درباره ما | آکادمی مهارت محور ساینسینو",
  description:
    "ساینسینو؛ جایی برای کشف، یادگیری و ساختن آینده. آکادمی آموزش مهارت‌محور علوم و فناوری‌های نوین.",
};

export default function AboutPage() {
  return (
    <main className={mainStyle}>
      <AboutHero />
      <AboutStory />
      <AboutPurpose />
      <AboutActivities />
      <AboutApproach />
      <AboutWhy />
      <AboutClosing />
    </main>
  );
}
