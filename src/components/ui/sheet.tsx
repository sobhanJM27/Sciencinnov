"use client";

import * as React from "react";
import { Dialog as SheetPrimitive } from "@base-ui/react/dialog";
import { XIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Sheet({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}

function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

function SheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}

function SheetBackdrop({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Backdrop>) {
  return (
    <SheetPrimitive.Backdrop
      data-slot="sheet-backdrop"
      className={cn(
        "fixed inset-0 z-50 bg-black/50",
        "transition-opacity duration-300 ease-out",
        "data-starting-style:opacity-0",
        "data-ending-style:opacity-0",
        className,
      )}
      {...props}
    />
  );
}

function SheetContent({
  className,
  children,
  side = "right",
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Popup> & {
  side?: "top" | "right" | "bottom" | "left";
}) {
  return (
    <SheetPortal>
      <SheetBackdrop />

      <SheetPrimitive.Popup
        data-slot="sheet-content"
        className={cn(
          // Base styles
          "fixed z-50 flex flex-col gap-4",
          "border-border bg-background shadow-2xl",

          // Smooth movement animation
          "will-change-transform",
          "transition-transform duration-500",
          "ease-[cubic-bezier(0.22,1,0.36,1)]",

          // Closing animation
          "data-ending-style:duration-300",
          "data-ending-style:ease-in",

          // Right
          side === "right" &&
            [
              "inset-y-0 right-0 h-full w-4/5 sm:max-w-sm",
              "border-l",
              "translate-x-0",
              "data-starting-style:translate-x-full",
              "data-ending-style:translate-x-full",
            ].join(" "),

          // Left
          side === "left" &&
            [
              "inset-y-0 left-0 h-full w-4/5 sm:max-w-sm",
              "border-r",
              "translate-x-0",
              "data-starting-style:-translate-x-full",
              "data-ending-style:-translate-x-full",
            ].join(" "),

          // Top
          side === "top" &&
            [
              "inset-x-0 top-0 h-auto w-full",
              "border-b",
              "translate-y-0",
              "data-starting-style:-translate-y-full",
              "data-ending-style:-translate-y-full",
            ].join(" "),

          // Bottom
          side === "bottom" &&
            [
              "inset-x-0 bottom-0 h-auto w-full",
              "border-t",
              "translate-y-0",
              "data-starting-style:translate-y-full",
              "data-ending-style:translate-y-full",
            ].join(" "),

          className,
        )}
        {...props}
      >
        {children}

        {/* Default Close Button */}
        <SheetPrimitive.Close
          aria-label="بستن"
          className={cn(
            "absolute inset-s-4 top-4 z-10",
            "flex size-10 items-center justify-center",
            "rounded-xl border border-blue-100",
            "bg-blue-50 text-blue-600 shadow-sm",
            "transition-all duration-300",
            "hover:rotate-90 hover:border-blue-200",
            "hover:bg-blue-600 hover:text-white hover:shadow-md",
            "active:scale-90",
            "focus-visible:outline-none",
            "focus-visible:ring-2 focus-visible:ring-blue-500",
            "focus-visible:ring-offset-2",
          )}
        >
          <XIcon className="size-5" />
          <span className="sr-only">بستن</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Popup>
    </SheetPortal>
  );
}

function SheetHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-3 p-5", className)}
      {...props}
    />
  );
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("font-semibold", className)}
      {...props}
    />
  );
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
};