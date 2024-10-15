import { KyivMachine, LemonTuesday } from "../utils/fonts";

import Image from "next/image";
import MainButton from "./MainButton";
import decor1 from "@/public/decor-4.png";

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

export function MenuHome(): JSX.Element {
  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-6 xl:px-0 sm:mt-20">
      <div className="w-full grid grid-cols-1 xl:grid-cols-4 items-center">
        <div className="xl:col-span-3 border-4 border-[#30312a] px-4 sm:px-20 xl:pl-10 xl:pr-52 py-16 -mt-28 sm:-mt-40 xl:mt-0 order-2 xl:order-1">
          <h2
            className={`relative text-black text-3xl lg:text-4xl font-medium text-center lg:text-left px-4 py-1 z-20 ${KyivMachine.className}`}
          >
            Ние препоръчваме
          </h2>
          <p
            className={`my-12 text-xl lg:text-2xl text-center lg:text-left ${LemonTuesday.className}`}
          >
            &quot;Good vibes and even better cocktails.&quot;
          </p>

          <MenuHomeCard
            drinkName="Cloudini"
            price="120ML / 9.50 BGN"
            description="Водка Reyka, Лактоферментирал грейпфрут, Сух вермут Dolin, Солен разтвор"
          />
          <MenuHomeCard
            drinkName="Cloudini"
            price="120ML / 9.50 BGN"
            description="Водка Reyka, Лактоферментирал грейпфрут, Сух вермут Dolin, Солен разтвор"
          />
          <MenuHomeCard
            drinkName="Cloudini"
            price="120ML / 9.50 BGN"
            description="Водка Reyka, Лактоферментирал грейпфрут, Сух вермут Dolin, Солен разтвор"
          />

          <div className="flex justify-center lg:justify-start mt-16">
            <MainButton href={"/menu"} text={"Вижте Още"} />
          </div>
        </div>
        <div className="xl:-ml-72 order-1 xl:order-2 flex justify-center z-10">
          <Image src={decor1} alt="Cocktails" className="w-[600px] h-auto" />
        </div>
      </div>
    </section>
  );
}
