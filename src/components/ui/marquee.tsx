"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "cn";

interface MarqueeProps {
  children: ReactNode;
  duration?: number;
  copies?: number;
  className?: string;
}

export function Marquee({
  children,
  duration = 30,
  copies = 4,
  className,
}: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<Animation | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const animation = track.animate(
      [
        { transform: "translateX(0)" },
        { transform: `translateX(-${100 / copies}%)` },
      ],
      { duration: duration * 1000, iterations: Infinity, easing: "linear" },
    );
    animationRef.current = animation;

    return () => {
      animation.cancel();
      animationRef.current = null;
    };
  }, [duration, copies]);

  return (
    <div
      dir="ltr"
      onMouseEnter={() => animationRef.current?.pause()}
      onMouseLeave={() => animationRef.current?.play()}
      className={cn(
        "overflow-hidden [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
        className,
      )}
    >
      <div ref={trackRef} className="flex w-max will-change-transform">
        {Array.from({ length: copies }, (_, i) => (
          <div
            key={i}
            aria-hidden={i > 0}
            className="flex shrink-0 items-center gap-10 pr-10 sm:gap-16 sm:pr-16"
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}
