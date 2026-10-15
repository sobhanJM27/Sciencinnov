import Image from "next/image";
import Link from "next/link";

export function NavbarLogo() {
  return (
    <Link href="/" aria-label="صفحه اصلی">
      <Image
        src="/images/sciencinnov_logo.png"
        alt="Sciencinnov"
        width={150}
        height={140}
        priority
      />
    </Link>
  );
}
