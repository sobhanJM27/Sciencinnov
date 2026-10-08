import { v4 as uuidv4 } from "uuid";

export const popupFields = [
  {
    id: uuidv4(),
    name: "fullName",
    label: "نام و نام خانوادگی",
    type: "text",
    inputMode: undefined,
    autoComplete: "name",
  },
  {
    id: uuidv4(),
    name: "age",
    label: "سن دانش‌آموز",
    type: "text",
    inputMode: "numeric",
    autoComplete: "off",
  },
  {
    id: uuidv4(),
    name: "phone",
    label: "شماره تماس",
    type: "tel",
    inputMode: "tel",
    autoComplete: "tel",
  },
] as const;
