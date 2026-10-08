import { v4 as uuidv4 } from "uuid";

export const goals = [
  {
    id: uuidv4(),
    icon: "/images/computer.png",
    title: "مهارت‌آموزی",
    description:
      "یادگیری فراتر از کتاب و کلاس؛ کودکان با تجربه، ساختن و انجام دادن، مهارت‌هایی لازم برای ساختن آینده‌ای بهتر می‌آموزند.",
  },
  {
    id: uuidv4(),
    icon: "/images/lamp.png",
    title: "تفکر خلاقانه",
    description:
      "کمک به کودکان تا متفاوت فکر کنند؛ سوال بپرسند و برای هر مسئله، راه‌حل‌های تازه و خلاقانه پیدا کنند.",
  },
  {
    id: uuidv4(),
    icon: "/images/intelligence.png",
    title: "رشد هوش",
    description:
      "پرورش توانایی‌های ذهنی کودکان با فعالیت‌های جذاب و هدفمند، برای تقویت تمرکز، دقت، استدلال و حل مسئله.",
  },
];
