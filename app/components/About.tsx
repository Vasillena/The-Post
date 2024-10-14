import { KyivMachine, LemonTuesday, firaSans } from "../utils/fonts";

import Image from "next/image";
import decor1 from "@/public/decor-2.png";
import decor2 from "@/public/decor-3.png";

export function About(): JSX.Element {
  return (
    <>
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 xl:px-0 mt-20 sm:mt-24">
        <div className="w-full grid grid-cols-1 xl:grid-cols-4  items-center">
          <div className="xl:absolute flex justify-center z-10">
            <Image src={decor1} alt="Cocktails" className="w-[620px] h-auto" />
          </div>
          <div className="xl:col-span-3 xl:col-start-2 border-4 border-[#30312a] px-4 sm:px-20 xl:pl-60 xl:pr-10 py-16 -mt-28 sm:-mt-40 xl:mt-0 text-center lg:text-left">
            <h1
              className={`relative text-3xl lg:text-4xl z-20 ${KyivMachine.className}`}
            >
              Бар “Пощата”
            </h1>
            <p
              className={`my-12 text-xl lg:text-2xl ${LemonTuesday.className}`}
            >
              Бар “The Post” е място със собствен дух, разположено в сърцето на
              Пловдив, до емблематичната сграда на Пощата.
            </p>
            <p className={`text-lg lg:text-xl ${firaSans.className}`}>
              Атмосферата тук преплита история и модерност, вдъхновена от ретро
              елементи като пощенски кутии, стари телефони и марки. Всяко кътче
              носи спомен от миналото, но с модерно звучене, което прави бар
              “The Post” уникално място за срещи и споделени моменти.
            </p>
            <p className={`mt-4 text-lg lg:text-xl ${firaSans.className}`}>
              Тук коктейлите са създадени с внимание от опитни миксолози и
              разказват истории с всяка глътка. В бар “The Post” всяка поръчка
              носи почерка на бармана, който влага страст и вдъхновение във
              всяка рецепта. Независимо дали търсиш нещо леко и освежаващо или
              предпочиташ по-силни вкусове, тук ще намериш своята перфектна
              напитка в една приятелска и уютна обстановка.
            </p>
          </div>
        </div>
      </section>
      <section
        className="max-w-[1440px] mx-auto w-full h-[300px] sm:h-[560px] mt-10 sm:mt-24 sm:bg-fixed bg-center bg-contain"
        style={{
          backgroundImage: `url(${decor2.src})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Optionally add content inside the fixed background section */}
      </section>
      <div id="menu" />
    </>
  );
}
