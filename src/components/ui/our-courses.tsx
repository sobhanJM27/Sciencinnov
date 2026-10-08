import { ourCourses } from "@/items/our-courses";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { OurCourseCard } from "./our-course-card";
import { cn } from "cn";
import { sectionPaddingX, sectionSubtitle, sectionTitle } from "@/lib/style";

export function OurCourses() {
  return (
    <section className="w-full">
      <div
        className={cn(
          "mx-auto grid grid-cols-1 gap-12 py-10 lg:grid-cols-2 lg:items-center lg:gap-16",
          sectionPaddingX,
        )}
      >
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h2 className={sectionTitle}>دوره‌های ما</h2>
            <p className={sectionSubtitle}>فرصت‌هایی برای آینده</p>
          </div>
          <div className="relative aspect-4/3 w-full">
            <Image
              src="/images/our-courses.png"
              alt="دانش‌آموزان ساینسینوو"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-20 gap-y-10 sm:grid-cols-2">
          {ourCourses.map((course, index) => (
            <Reveal key={course.id} delay={index * 2 * 200} className="h-full">
              <OurCourseCard course={course} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
