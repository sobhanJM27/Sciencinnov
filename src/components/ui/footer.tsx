import { contactInfo, socialLinks } from "@/items/footer";
import Image from "next/image";
import { ConsultationForm } from "./consultation-form";

export function Footer() {
  return (
    <footer className="w-full">
      <div className="bg-brand-blue-active">
        <div className="flex flex-col gap-12 px-4 py-12 sm:px-6 md:gap-14 md:px-8 md:py-16 lg:px-36">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-start">
            <div className="flex w-full flex-col gap-8 md:mx-0">
              <Image
                src="/images/logo-blue.png"
                alt="Sciencinnov"
                width={150}
                height={140}
                className="h-auto w-32 self-center md:w-36"
              />

              <ul className="flex flex-col gap-6 text-brand-surface-dark/80">
                {contactInfo.map((item) => {
                  const isBranch = [
                    "mashhad-1",
                    "mashhad-2",
                    "tehran",
                  ].includes(item.id);

                  const branchTitle = {
                    "mashhad-1": "شعبه اول مشهد",
                    "mashhad-2": "شعبه دوم مشهد",
                    tehran: "شعبه تهران",
                  }[item.id];

                  const content = (
                    <div className="flex items-start gap-4">
                      <Image
                        src={item.icon}
                        alt=""
                        width={33}
                        height={33}
                        className="mt-1 size-6 shrink-0 object-contain"
                      />

                      <div className="flex flex-col gap-1">
                        {isBranch && (
                          <span className="font-bold text-brand-surface-dark">
                            {branchTitle}
                          </span>
                        )}

                        <span
                          dir={item.id === "email" ? "ltr" : undefined}
                          className="text-sm leading-7"
                        >
                          {item.text}
                        </span>
                      </div>
                    </div>
                  );

                  return (
                    <li key={item.id}>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="transition-opacity duration-300 hover:opacity-60"
                        >
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="flex flex-col gap-8">
              <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl text-brand-surface-dark">
                مشاوره رایگان با متخصصین آموزشی
              </h2>
              <ConsultationForm />
            </div>
          </div>

          <ul className="flex justify-center gap-4">
            {socialLinks.map((social) => (
              <li key={social.id}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="grid size-10 place-items-center rounded-full bg-white transition-transform duration-300 hover:scale-110"
                >
                  <Image
                    src={social.icon}
                    alt=""
                    width={24}
                    height={24}
                    className="size-5"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-brand-green-light">
        <p className="max-w-7xl px-4 py-3 text-sm sm:px-6 md:px-8 lg:px-16 text-brand-surface-dark">
          © آکادمی ساینسینو ۱۴۰۵
        </p>
      </div>
    </footer>
  );
}
