"use client";

import { Children, isValidElement, useState, type ReactNode } from "react";
import Image from "next/image";
import { cn } from "cn";

interface CarouselProps {
  children: ReactNode;
  className?: string;
}

export function Carousel({ children, className }: CarouselProps) {
  const items = Children.toArray(children).filter(isValidElement);
  const count = items.length;
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  if (count === 0) return null;

  const next = () => {
    setDirection("next");
    setIndex((prev) => (prev + 1) % count);
  };
  const prev = () => {
    setDirection("prev");
    setIndex((prev) => (prev - 1 + count) % count);
  };

  const ordered = Array.from({ length: count }, (_, i) => items[(index + i) % count]);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={prev}
        aria-label="موارد بعدی"
        className="absolute top-1/2 -left-6 z-10 hidden size-14 -translate-y-1/2 items-center justify-center rounded-full bg-brand-gray p-3 shadow-md ring-1 ring-black/5 transition-transform hover:scale-105 sm:flex"
      >
        <Image
          src="/images/arrow-right.png"
          alt=""
          width={50}
          height={58}
          className="h-auto w-5 rotate-180"
        />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="موارد قبلی"
        className="absolute top-1/2 -right-6 z-10 hidden size-14 -translate-y-1/2 items-center justify-center rounded-full bg-brand-gray p-3 shadow-md ring-1 ring-black/5 transition-transform hover:scale-105 sm:flex"
      >
        <Image
          src="/images/arrow-right.png"
          alt=""
          width={50}
          height={58}
          className="h-auto w-5"
        />
      </button>

      <div className="overflow-hidden">
        <div
          key={index}
          className={cn(
            "flex gap-6 overflow-x-auto px-1 py-2 [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden",
            "animate-in fade-in duration-700 ease-out",
            direction === "next" ? "slide-in-from-right-6" : "slide-in-from-left-6",
            className
          )}
        >
          {ordered}
        </div>
      </div>
    </div>
  );
}