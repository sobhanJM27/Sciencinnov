import { Goals } from "@/components/ui/goals";
import { Hero } from "@/components/ui/hero";
import { OurCourses } from "@/components/ui/our-courses";
import { OurExperience } from "@/components/ui/our-experience";
import { OurInstructors } from "@/components/ui/our-instructors";
import { TrustedBy } from "@/components/ui/trusted-by";
import { mainStyle } from "@/lib/style";

export default function Home() {
  return (
    <main className={mainStyle}>
      <Hero />
      <Goals />
      <OurCourses />
      <OurInstructors />
      <OurExperience />
      <TrustedBy />
    </main>
  );
}
