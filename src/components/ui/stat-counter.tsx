"use client";

import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  target: number;
  prefix?: string;
  duration?: number;
  delay?: number;
  className?: string;
}

export function StatCounter({
  target,
  prefix = "",
  duration = 2200,
  delay = 0,
  className,
}: StatCounterProps) {
  const [value, setValue] = useState(0);
  const spanRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;

    let rafId: number;
    let timeoutId: ReturnType<typeof setTimeout>;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;

        timeoutId = setTimeout(() => {
          const start = performance.now();

          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * target));

            if (progress < 1) {
              rafId = requestAnimationFrame(step);
            }
          };

          rafId = requestAnimationFrame(step);
        }, delay);
      },
      { threshold: 0.4 },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
      cancelAnimationFrame(rafId);
    };
  }, [target, duration, delay]);

  return (
    <span ref={spanRef} className={className}>
      {value.toLocaleString("fa-IR")}
      {prefix}
    </span>
  );
}
