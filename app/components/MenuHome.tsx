import { AmericanTypewriter, LemonTuesday, firaSans } from "../utils/fonts";

import Image from "next/image";
import decor1 from "@/public/decor-4.png";

export function MenuHome(): JSX.Element {
  return (
    <>
      <section className="max-w-[1440px] mx-auto px-10 mt-32">
        <div className="w-full grid grid-cols-1 lg:grid-cols-4  items-center">
          <div className="lg:col-span-3 border-4 border-[#30312a] pl-20 pr-60 py-24">
            <h1 className={`text-4xl ${AmericanTypewriter.className}`}>
              Бар “Пощата”
            </h1>
            <p className={`my-12 text-2xl ${LemonTuesday.className}`}>
              Бар “The Post” е място със собствен дух, разположено в сърцето на
              Пловдив, до емблематичната сграда на Пощата.
            </p>
            <p className={`text-xl ${firaSans.className}`}>
              Атмосферата тук преплита история и модерност, вдъхновена от ретро
              елементи като пощенски кутии, стари телефони и марки. Всяко кътче
              носи спомен от миналото, но с модерно звучене, което прави бар
              “The Post” уникално място за срещи и споделени моменти.
            </p>
            <p className={`text-xl ${firaSans.className}`}>
              Тук коктейлите са създадени с внимание от опитни миксолози и
              разказват истории с всяка глътка. В бар “The Post” всяка поръчка
              носи почерка на бармана, който влага страст и вдъхновение във
              всяка рецепта. Независимо дали търсиш нещо леко и освежаващо или
              предпочиташ по-силни вкусове, тук ще намериш своята перфектна
              напитка в една приятелска и уютна обстановка.
            </p>
          </div>
          <div className="absolute right-40">
            <Image src={decor1} alt="Cocktails" className="w-[451px] h-auto" />
          </div>
        </div>
      </section>
    </>
  );
}
