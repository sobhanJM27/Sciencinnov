import Image from "next/image";
import { ourCourses } from "@/items/our-courses";

export function OurCourseCard({ course }: { course: (typeof ourCourses)[number] }) {
  return (
    <div
      className={`relative flex flex-col overflow-visible rounded-[19px] p-6 pt-16 h-full w-full items-stretch ${course.cardClassName}`}
    >
      <div className="absolute top-6 -right-9 w-3/4 lg:w-full">
        <span
          className={`block px-6 py-3 text-sm font-bold whitespace-nowrap text-white ${course.tagClassName}`}
        >
          {course.tag}
        </span>
        <span
          className="absolute -right-px -bottom-6.5 h-6.5 w-9.25 bg-black border border-brand-blue-light"
          style={{ clipPath: "polygon(0 0, 0 100%, 100% 0)" }}
        />
      </div>
      <Image src={course.icon} alt={course.tag} width={100} height={100} className="size-16.5 mx-auto my-5" />
      <p className="text-sm text-brand-black">{course.description}</p>
    </div>
  );
}