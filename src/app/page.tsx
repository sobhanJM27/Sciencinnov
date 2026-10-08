import { Goals } from "@/components/ui/goals";
import { Hero } from "@/components/ui/hero";
import { OurCourses } from "@/components/ui/our-courses";
import { OurExperience } from "@/components/ui/our-experience";
import { OurInstructors } from "@/components/ui/our-instructors";
import { TrustedBy } from "@/components/ui/trusted-by";

export default function Home() {
  return (
    <main className="flex flex-col gap-2 items-center justify-center px-6 py-2">
      <Hero />
      <Goals />
      <OurCourses />
      <OurInstructors />
      <OurExperience />
      <TrustedBy />
    </main>
  );
}
