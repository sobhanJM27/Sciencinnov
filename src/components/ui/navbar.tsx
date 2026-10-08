"use client";

import { navTabs } from "@/items/navTabs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full">
      <div className="mx-auto flex items-center justify-between px-4 py-2 lg:px-14">
        <Link href="/">
          <Image
            src="/images/sciencinnov_logo_white.png"
            alt="Sciencinnov"
            width={150}
            height={140}
            priority
          />
        </Link>
        <nav className="hidden items-center gap-10 md:flex">
          {navTabs.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.id}
                href={item.href}
                className={`px-4 text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-brand-blue-active"
                    : "text-brand-black-light hover:text-brand-blue-active"
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        <Sheet>
          <SheetTrigger
            type="button"
            className="flex items-center justify-center md:hidden"
            aria-label="باز کردن منو"
          >
            <Menu className="size-6" />
          </SheetTrigger>
          <SheetContent side="right" className="w-4/5 max-w-xs rounded-sm">
            <SheetHeader>
              <SheetTitle className="sr-only">منوی اصلی</SheetTitle>
              <Link href="/">
                <Image
                  src="/images/sciencinnov_logo_white.png"
                  alt="Sciencinnov"
                  width={110}
                  height={103}
                />
              </Link>
            </SheetHeader>

            <nav className="flex flex-col gap-1 px-5">
              {navTabs.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <SheetClose key={item.id}>
                    <Link
                      href={item.href}
                      className={`py-5! transition-colors duration-300 ${
                        isActive
                          ? "text-brand-blue-active"
                          : "text-brand-black-light hover:text-brand-blue-active"
                      }`}
                    >
                      {item.title}
                    </Link>
                  </SheetClose>
                );
              })}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
