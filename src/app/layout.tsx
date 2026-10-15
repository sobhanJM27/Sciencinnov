import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "آکادمی مهارت‌ محور ساینسینو",
  description: "آکادمی آموزش مهارت‌ محور علوم و فناوری بر پایه متدهای نوین",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" data-scroll-behavior="smooth">
      <body className="antialiased">
        <Toaster />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
