"use client";

import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";
import { NavbarLogo } from "./navbar-logo";

export function Navbar() {
  return (
    <header className="w-full">
      <div className="mx-auto flex items-center justify-between px-4 py-2 lg:px-14">
        <NavbarLogo />
        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  );
}
