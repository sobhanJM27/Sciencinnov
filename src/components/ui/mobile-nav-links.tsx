"use client";

import { navTabs } from "@/items/navTabs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft } from "lucide-react";

import { SheetClose } from "@/components/ui/sheet";

export function MobileNavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-2 px-4 py-6">
      {navTabs.map((item, index) => {
        const isActive = pathname === item.href;

        return (
          <SheetClose key={item.id}>
            <Link
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              style={{
                animationDelay: `${index * 70}ms`,
              }}
              className={`group flex items-center justify-between
                rounded-xl px-4 py-4 text-sm font-medium
                animate-in slide-in-from-right-4
                duration-500
                transition-colors
                ${
                  isActive
                    ? "bg-blue-50 text-brand-blue-active shadow-sm"
                    : "text-brand-black-light hover:bg-gray-50 hover:text-brand-blue-active"
                }`}
            >
              <span>{item.title}</span>

              <ChevronLeft
                className={`size-4 transition-all duration-300
                  ${
                    isActive
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                  }`}
              />
            </Link>
          </SheetClose>
        );
      })}
    </nav>
  );
}
