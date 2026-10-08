"use client";

// import type { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "./input";

export function ConsultationForm() {
//   function handleSubmit(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//   }

  return (
    <form
    //   onSubmit={handleSubmit}
      className="flex w-full flex-col gap-4 md:w-64 md:self-end"
    >
      <Input
        name="fullName"
        placeholder="نام و نام خانوادگی شما"
        autoComplete="name"
        required
      />
      <Input
        name="phone"
        // type="tel"
        inputMode="tel"
        placeholder="شماره تماس"
        autoComplete="tel"
        required
      />
      <Button type="submit" className="w-full!">
        دریافت مشاوره
      </Button>
    </form>
  );
}