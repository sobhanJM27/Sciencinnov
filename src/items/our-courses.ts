import { v4 as uuidv4 } from 'uuid';

export const ourCourses = [
  {
    id: uuidv4(),
    tag: "ریاضی و علوم",
    description:
      "ریاضیات، فیزیک، شیمی و زیست‌شناسی، آزمایشگاه علوم و نجوم، بازی‌های علمی",
    cardClassName: "bg-brand-orange-dark",
    tagClassName: "bg-brand-orange",
    icon: "/images/math.png",
  },
  {
    id: uuidv4(),
    tag: "مهارت‌های کامپیوتری",
    description:
      "پایتون، اسکرچ، C/C++‎، هوش مصنوعی، طراحی وب، بازی‌سازی، امنیت شبکه",
    cardClassName: "bg-brand-green-dark2",
    tagClassName: "bg-brand-green-light2",
    icon: "/images/flash.png",
  },
  {
    id: uuidv4(),
    tag: "مسابقات و المپیادها",
    description:
      "المپیادهای علمی دانش‌آموزی، سینگو، کانگورو، مسابقات برنامه‌نویسی",
    cardClassName: "bg-brand-green-light3",
    tagClassName: "bg-brand-green-dark3",
    icon: "/images/cup.png",
  },
  {
    id: uuidv4(),
    tag: "کارگاه‌های آموزشی",
    description:
      "آشنایی با مهارت‌ها و علوم جدید با محوریت کار گروهی و تفکر جمعی",
    cardClassName: "bg-brand-blue-light2",
    tagClassName: "bg-brand-blue-deep2",
    icon: "/images/education.png",
  },
] as const;
