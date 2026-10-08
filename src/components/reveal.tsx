"use client";

import { useInView } from "react-intersection-observer";

export const RevealSide = {
  LEFT: "left",
  RIGHT: "right",
  TOP: "top",
  BOTTOM: "bottom",
} as const;
export type RevealSide = (typeof RevealSide)[keyof typeof RevealSide];

export type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  side?: RevealSide;
  className?: string;
};

export function Reveal({
  children,
  delay = 0,
  duration = 500,
  side = RevealSide.BOTTOM,
  className,
}: RevealProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const translateDir = {
    bottom: "translateY(20px)",
    top: "translateY(-20px)",
    left: "translateX(-20px)",
    right: "translateX(20px)",
  }[side];

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0) translateX(0)" : translateDir,
        transition: `all ${duration}ms cubic-bezier(0.17, 0.55, 0.55, 1)`,
        transitionDelay: `${delay}ms`,
      }}
      className={className}
    >
      {children}
    </div>
  );
}
