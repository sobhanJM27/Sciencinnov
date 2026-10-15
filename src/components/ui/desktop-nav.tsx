"use client";

import { navTabs } from "@/items/navTabs";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-10 md:flex">
      {navTabs.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.id}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={`relative px-4 py-2 text-sm font-medium
              transition-colors duration-300
              after:absolute after:bottom-0 after:left-4 after:h-0.5
              after:bg-brand-blue-active after:transition-all
              after:duration-300
              ${
                isActive
                  ? "text-brand-blue-active after:right-4"
                  : "text-brand-black-light after:right-full hover:text-brand-blue-active hover:after:right-4"
              }`}
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}
