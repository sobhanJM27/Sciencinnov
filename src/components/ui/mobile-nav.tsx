"use client";

import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { MobileNavLinks } from "./mobile-nav-links";
import { MobileNavHeader } from "./mobile-nav-header";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger
        type="button"
        aria-label="باز کردن منو"
        className="group flex size-10 items-center justify-center
          rounded-xl border border-gray-200 bg-white
          transition-all duration-300
          hover:border-blue-200 hover:bg-blue-50
          active:scale-95 md:hidden"
      >
        <Menu
          className="size-5 text-gray-700 transition-colors
            duration-300 group-hover:text-brand-blue-active"
        />
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-[82%] max-w-85 overflow-hidden
          rounded-l-2xl border-l border-gray-100
          bg-white p-0 shadow-2xl
          [&>button]:hidden"
      >
        <MobileNavHeader />

        <MobileNavLinks />

        <div
          className="absolute inset-x-0 bottom-0 border-t
          border-gray-100 bg-linear-to-r
          from-white via-blue-50/50 to-white px-6 py-5"
        >
          <p className="text-center text-xs text-gray-400">Sciencinnov</p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
