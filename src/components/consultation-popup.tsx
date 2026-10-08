"use client";

import { useId, useState, type FormEvent } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogClose, DialogContent, DialogTitle } from "./ui/dialog";
import { popupFields } from "@/items/popup-items";

export function ConsultationPopup() {
  const [open, setOpen] = useState(false);
  const formId = useId();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setOpen(false);
  }

  return (
    <>
      <Button onClick={() => setOpen(true)}>دریافت مشاوره</Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <div className="flex items-center justify-between gap-4 bg-brand-green-light px-5 py-3 text-brand-surface-dark sm:px-6">
            <DialogTitle className="text-lg sm:text-2xl">
              مشاوره رایگان با متخصصین آموزشی
            </DialogTitle>
            <DialogClose
              aria-label="بستن"
              className="shrink-0 cursor-pointer transition-opacity duration-300 hover:opacity-70"
            >
              <X className="size-7" strokeWidth={2.5} />
            </DialogClose>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-8 px-5 py-8 sm:px-12 sm:py-10"
          >
            <div className="flex flex-col gap-6">
              {popupFields.map((field) => {
                const id = `${formId}-${field.name}`;

                return (
                  <div key={field.id} className="flex flex-col gap-2">
                    <label
                      htmlFor={id}
                      className="px-3 text-sm text-brand-black-light"
                    >
                      {field.label}
                    </label>
                    <Input
                      id={id}
                      name={field.name}
                      type={field.type}
                      inputMode={field.inputMode}
                      autoComplete={field.autoComplete}
                      variant="onLight"
                      required
                    />
                  </div>
                );
              })}
            </div>

            <Button type="submit" className="self-start">
              با من تماس بگیرید!
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
