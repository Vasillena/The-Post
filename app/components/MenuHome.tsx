import { KyivMachine, LemonTuesday } from "../utils/fonts";

import Image from "next/image";
import MainButton from "./MainButton";
import Reveal from "./Animations/Reveal";
import decor1 from "@/public/decor-4.png";
import { getI18n } from "@/locales/server";

type MenuHomeCardProps = {
  drinkName: string;
  price: string;
  description: string;
};

export function MenuHomeCard({
  drinkName,
  price,
  description,
}: MenuHomeCardProps) {
  return (
    <div className="relative w-full mx-auto flex flex-col z-20">
      <div className="flex items-center">
        <h4 className="font-bold text-[16px] md:text-[20px]">{drinkName}</h4>
        <span className="flex-grow border-b border-dotted mx-2 pt-1.5 border-gray-300 md:border-black" />
        <span className="font-bold text-[14px] md:text-[20px]">{price}</span>
      </div>
      <p className="text-left pr-[40%] text-[14px] md:text-[16px]">
        {description}
      </p>
    </div>
  );
}

export default async function MenuHome(): Promise<JSX.Element> {
  const t = await getI18n();

  return (
    <Reveal initial={{ x: "-5%" }} animate={{ x: "0%" }}>
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 xl:px-0 sm:mt-20">
        <div className="w-full grid grid-cols-1 xl:grid-cols-4 items-center">
          <div className="xl:col-span-3 border-4 border-[#30312a] px-4 sm:px-20 xl:pl-10 xl:pr-52 py-16 -mt-28 sm:-mt-40 xl:mt-0 order-2 xl:order-1">
            <h2
              className={`relative text-black text-3xl lg:text-4xl font-medium text-center lg:text-left px-4 py-1 z-20 ${KyivMachine.className}`}
            >
              {t("cocktails.title")}
            </h2>
            <p
              className={`my-12 text-xl lg:text-2xl text-center lg:text-left ${LemonTuesday.className}`}
            >
              &quot;Good vibes and even better cocktails.&quot;
            </p>

            <MenuHomeCard
              drinkName="Korean Paloma"
              price="200ML / 13.90 BGN"
              description={t("cocktails.cocktail-1")}
            />
            <MenuHomeCard
              drinkName="Tiki Popi"
              price="200ML / 13.50 BGN"
              description={t("cocktails.cocktail-2")}
            />
            <MenuHomeCard
              drinkName="Karpuzzi"
              price="180ML / 13.50 BGN"
              description={t("cocktails.cocktail-3")}
            />

            <div className="flex justify-center lg:justify-start mt-16">
              <MainButton href={"/menu"} text={t("cocktails.button")} />
            </div>
          </div>
          <div className="xl:-ml-72 order-1 xl:order-2 flex justify-center z-10">
            <Image src={decor1} alt="Cocktails" className="w-[600px] h-auto" />
          </div>
        </div>
      </section>
    </Reveal>
  );
}
