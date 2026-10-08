import { v4 as uuidv4 } from "uuid";

export const contactInfo = [
  {
    id: uuidv4(),
    icon: "/images/address.png",
    text: "بلوار احمدآباد، بلوار رضا، خیابان رضا ۳۱، موسسه ساینسینو",
    href: undefined,
  },
  {
    id: "email",
    icon: "/images/mail.png",
    text: "info@sciencinnov.com",
    href: "mailto:info@sciencinnov.com",
  },
  {
    id: uuidv4(),
    icon: "/images/tel.png",
    text: "۰۹۰۴۳۳۶۸۷۰۷",
    href: "tel:09043368707",
  },
];

export const socialLinks = [
  {
    id: uuidv4(),
    name: "لینکدین",
    href: "#",
    icon: "/images/linkedin.png",
  },
  {
    id: uuidv4(),
    name: "ایتا",
    href: "#",
    icon: "/images/eitaa.png",
  },
  {
    id: uuidv4(),
    name: "بله",
    href: "#",
    icon: "/images/bale.png",
  },
  {
    id: uuidv4(),
    name: "تلگرام",
    href: "#",
    icon: "/images/telegram.png",
  },
];
