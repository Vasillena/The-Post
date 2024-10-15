import { KyivMachine, LemonTuesday } from "../utils/fonts";

import Image from "next/image";
import Link from "next/link";
import MainButton from "./MainButton";
import cocktail from "@/public/hero-2.webp";
import decor from "@/public/decor-6.png";
import { getI18n } from "@/locales/server";
import socials1 from "@/public/socials-1.png";
import socials2 from "@/public/socials-2.png";

export default async function Hero(): Promise<JSX.Element> {
  const t = await getI18n();

  return (
    <>
      <section className="max-w-[1440px] mx-auto relative h-screen">
        <div
          className={`w-full h-full grid grid-rows-1 grid-cols-1 xl:grid-cols-2 justify-center items-center px-4 sm:px-10 md:bg-[url(/hero.webp)] md:bg-cover md:bg-no-repeat md:bg-center`}
          style={{
            backgroundSize: "94%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        >
          <div className="hidden xl:block xl:ml-14 border-r-2 border-[#30312a]">
            <Image
              src={cocktail}
              alt="Cocktail"
              priority
              className="w-[600px] h-auto"
            />
          </div>
          <div className="xl:mr-14 max-w-[600px] xl:max-w-[440px] justify-self-center text-center xl:text-left">
            <h1
              className={`mb-8 xl:mb-32 text-3xl lg:text-4xl ${KyivMachine.className}`}
            >
              {t("hero.title")} <br /> {t("hero.title-2")}
            </h1>
            <p
              className={`text-xl lg:text-2xl underline underline-offset-8 ${KyivMachine.className}`}
              style={{ lineHeight: "3rem" }}
            >
              {t("hero.text")}
            </p>
            <p
              className={`mt-8 mb-10 xl:mb-20 text-lg lg:text-xl ${LemonTuesday.className}`}
              style={{ lineHeight: "2.5rem" }}
            >
              {t("hero.text-2")} <br /> {t("hero.text-3")}
            </p>
            <div className="flex justify-center xl:justify-start">
              <MainButton href={"/#contact"} text={t("hero.button")} />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full flex justify-center items-center gap-5 mb-10">
          <p className="text-center">Follow us</p>
          <Image
            src={decor}
            alt="Arrow"
            className="w-[100px] sm:w-[180px] h-auto"
          />
          <Link
            href="https://www.facebook.com/barthepost"
            aria-label="Facebook"
            target="_blank"
            className="relative inline-block transition-shadow duration-300 ease-in-out"
          >
            <Image src={socials2} alt="Facebook" className="w-6 h-auto" />
          </Link>
          <Link
            href="https://www.instagram.com/barthepost/"
            aria-label="Instagram"
            target="_blank"
            className="relative inline-block transition-shadow duration-300 ease-in-out"
          >
            <Image src={socials1} alt="Instagram" className="w-6 h-auto" />
          </Link>
        </div>
      </section>
    </>
  );
}
