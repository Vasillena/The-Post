import { KyivMachine, LemonTuesday, firaSans } from "../utils/fonts";

import Image from "next/image";
import Reveal from "./Animations/Reveal";
import decor1 from "@/public/decor-2.png";
import { getI18n } from "@/locales/server";

export default async function About(): Promise<JSX.Element> {
  const t = await getI18n();

  return (
    <>
      <Reveal initial={{ x: "5%" }} animate={{ x: "0%" }}>
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 xl:px-0 mt-10 sm:mt-32">
          <div className="w-full grid grid-cols-1 xl:grid-cols-4  items-center">
            <div className="xl:absolute flex justify-center z-10">
              <Image
                src={decor1}
                alt="Cocktails"
                className="w-[620px] h-auto"
              />
            </div>
            <div className="xl:col-span-3 xl:col-start-2 border-4 border-[#30312a] px-4 sm:px-20 xl:pl-60 xl:pr-10 py-16 -mt-28 sm:-mt-40 xl:mt-0 text-center lg:text-left">
              <h1
                className={`relative text-3xl lg:text-4xl z-20 ${KyivMachine.className}`}
              >
                {t("about.title")}
              </h1>
              <p
                className={`my-12 text-xl lg:text-2xl ${LemonTuesday.className}`}
              >
                {t("about.text-1")}
              </p>
              <p className={`text-lg lg:text-xl ${firaSans.className}`}>
                {t("about.text-2")}
              </p>
              <p className={`mt-4 text-lg lg:text-xl ${firaSans.className}`}>
                {t("about.text-3")}
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      <section
        className="max-w-[1440px] mx-auto w-full h-[300px] sm:h-[560px] mt-20 sm:mt-32 sm:bg-fixed bg-center bg-contain bg-[url(/decor-3-mobile.png)] sm:bg-[url(/decor-3.png)]"
        style={{
          backgroundRepeat: "no-repeat",
        }}
      ></section>
      <div id="menu" />
    </>
  );
}
