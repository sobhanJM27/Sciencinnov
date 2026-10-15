export const mainStyle =
  "flex flex-col gap-2 items-center justify-center px-6 py-2";

export const bodyText =
  "text-base leading-8 text-brand-black lg:text-lg font-medium";
export const onDarkBodyText =
  "text-base leading-8 text-white lg:text-lg font-medium";

export const sectionPaddingX = "px-4 sm:px-6 md:px-8 lg:px-10";
export const sectionPaddingY = "py-10 md:py-16";
export const sectionMarginY = "my-10 md:my-16";

export const sectionTitle =
  "text-2xl font-extrabold text-brand-black lg:text-3xl";
export const sectionTitleOnDark =
  "text-2xl font-extrabold text-white lg:text-3xl";
export const sectionSubtitle = "text-base text-brand-black-light lg:text-lg";

export const overlayBackdrop =
  "fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 data-ending-style:opacity-0 data-starting-style:opacity-0";

export const cardHover =
  "transition-all duration-300 ease-out " +
  "hover:-translate-y-1.5 " +
  "hover:shadow-[0_16px_40px_-16px_rgba(25,70,60,0.16)] " +
  "hover:ring-1 hover:ring-brand-green/20 " +
  "motion-reduce:transition-none motion-reduce:hover:translate-y-0";

export const radius = {
  card: "rounded-[19px]",
  section: "rounded-[40px]",
  sectionLarge: "rounded-[62px]",
  buttonLarge: "rounded-[33px]",
} as const;
