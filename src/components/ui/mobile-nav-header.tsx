import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

import { SheetClose, SheetHeader, SheetTitle } from "@/components/ui/sheet";

export function MobileNavHeader() {
  return (
    <SheetHeader
      className="relative border-b border-gray-100
        bg-linear-to-l from-blue-50/80 to-white px-6 py-6"
    >
      <div className="flex items-center justify-between">
        <Link href="/" aria-label="صفحه اصلی">
          <Image
            src="/images/sciencinnov_logo.png"
            alt="Sciencinnov"
            width={110}
            height={103}
          />
        </Link>

        <SheetClose
          type="button"
          aria-label="بستن منو"
          className="group flex size-10 shrink-0 items-center
            justify-center rounded-xl border border-blue-100
            bg-blue-50 text-brand-blue-active shadow-sm
            transition-all duration-300
            hover:rotate-90 hover:border-blue-200
            hover:bg-brand-blue-active hover:text-white
            hover:shadow-md active:scale-90"
        >
          <X className="size-5" />
        </SheetClose>
      </div>

      <SheetTitle className="sr-only">منوی اصلی</SheetTitle>
    </SheetHeader>
  );
}
