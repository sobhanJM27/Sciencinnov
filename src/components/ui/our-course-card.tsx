"use client";

import Image from "next/image";
import { ourCourses } from "@/items/our-courses";
import { cn } from "cn";
import { radius } from "@/lib/style";
import { useRouter } from "next/navigation";

export function OurCourseCard({
  course,
}: {
  course: (typeof ourCourses)[number];
}) {
  const router = useRouter();

  return (
    <div
      className={cn(
        `group relative flex flex-col overflow-visible p-6 pt-16 h-full w-full items-stretch 
        transition-all duration-200 ease-out cursor-pointer hover:-translate-y-2 hover:shadow-xl hover:shadow-black/5 
        ${course.cardClassName}`,
        radius.card,
      )}
      onClick={() => router.push("/courses")}
    >
      <div className="absolute top-6 -right-9 w-3/4 lg:w-full transition-transform duration-300 group-hover:translate-x-1">
        <span
          className={`block px-6 py-3 text-sm font-bold whitespace-nowrap text-white transition-all duration-300 group-hover:brightness-110 ${course.tagClassName}`}
        >
          {course.tag}
        </span>
        <span
          className="absolute -right-px -bottom-6.5 h-6.5 w-9.25 bg-black border border-brand-blue-light"
          style={{ clipPath: "polygon(0 0, 0 100%, 100% 0)" }}
        />
      </div>

      <Image
        src={course.icon}
        alt={course.tag}
        width={100}
        height={100}
        className="size-16.5 mx-auto my-5 transition-transform duration-300 ease-out group-hover:scale-110"
      />

      <p className="text-sm text-brand-black transition-colors duration-300">
        {course.description}
      </p>
    </div>
  );
}
