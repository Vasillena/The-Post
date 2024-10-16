import { KyivMachine, LemonTuesday, firaSans } from "../utils/fonts";

import Image from "next/image";
import MainButton from "./MainButton";
import Reveal from "./Animations/Reveal";
import decor from "@/public/decor-1.png";
import { getI18n } from "@/locales/server";

export default async function Second(): Promise<JSX.Element> {
  const t = await getI18n();

  return (
    <>
      <Reveal initial={{ x: "-5%" }} animate={{ x: "0%" }}>
        <section className="max-w-[1440px] mx-auto px-4 sm:px-10 sm:mt-20">
          <h1
            className={`hidden lg:block xl:hidden mb-8 text-3xl lg:text-4xl text-center ${KyivMachine.className}`}
          >
            {t("second.title")}
          </h1>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-20">
            <div className="justify-self-center text-center lg:text-left order-2 lg:order-1">
              <h1
                className={`block lg:hidden xl:block text-2xl lg:text-4xl ${KyivMachine.className}`}
              >
                {t("second.title")}
              </h1>
              <p
                className={`my-12 text-xl lg:text-2xl ${LemonTuesday.className}`}
                style={{ lineHeight: "2.5rem" }}
              >
                {t("second.text-1")}
              </p>
              <p className={`mb-12 text-lg lg:text-xl ${firaSans.className}`}>
                {t("second.text-2")}
              </p>
              <div className="flex justify-center lg:justify-start">
                <MainButton href={"/menu"} text={t("second.button")} />
              </div>
            </div>
            <div className="justify-self-center lg:justify-self-end order-1 lg:order-2">
              <Image src={decor} alt="Cocktails" className="w-[580px] h-auto" />
            </div>
          </div>
        </section>
      </Reveal>

      <div id="about" />
    </>
  );
}
