import { AmericanTypewriter, LemonTuesday, firaSans } from "../utils/fonts";

import Image from "next/image";
import decor1 from "@/public/decor-2.png";
import decor2 from "@/public/decor-3.png";

export function About(): JSX.Element {
  return (
    <>
      <section className="max-w-[1440px] mx-auto px-6 lg:px-0 mt-32">
        <div className="w-full grid grid-cols-1 lg:grid-cols-4  items-center">
          <div className="lg:absolute flex justify-center">
            <Image src={decor1} alt="Cocktails" className="w-[517px] h-auto" />
          </div>
          <div className="lg:col-span-3 lg:col-start-2 border-4 border-[#30312a] px-20 lg:pl-60 lg:pr-10 py-20 text-center lg:text-left">
            <h1
              className={`text-3xl lg:text-4xl ${AmericanTypewriter.className}`}
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
        className="max-w-[1440px] mx-auto w-full h-[560px] mt-32 bg-fixed bg-center bg-contain"
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
