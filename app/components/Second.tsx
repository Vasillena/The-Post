import { AmericanTypewriter, LemonTuesday, firaSans } from "../utils/fonts";

import Image from "next/image";
import decor from "@/public/decor-1.png";

export function Second(): JSX.Element {
  return (
    <>
      <section className="max-w-[1440px] mx-auto px-10 mt-20">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-20">
          <div className="justify-self-center">
            <h1 className={`text-4xl ${AmericanTypewriter.className}`}>
              Всяка напитка в Bar “The Post” е писмо до теб – запечатано с
              история, вкус и вдъхновение
            </h1>
            <p className={`my-12 text-2xl ${LemonTuesday.className}`}>
              Коктейлите ни не са просто напитки, а истории, написани от
              майстори на миксологията.
            </p>
            <p className={`text-xl ${firaSans.className}`}>
              В Bar “The Post” всеки коктейл носи почерка на бармана – вдъхновен
              от класиката, но винаги с нещо неочаквано. От свежи комбинации,
              които ще ти влязат като писмо в летен ден, до по-силни вкусове,
              които оставят дълбок отпечатък, нашите миксолози създават напитки,
              които разказват истории с всяка глътка. Готов ли си да чуеш
              следващата?
            </p>
            <button>СВЪРЖИ СЕ С НАС</button>
          </div>
          <div className="justify-self-end">
            <Image src={decor} alt="Cocktails" className="w-[580px] h-auto" />
          </div>
        </div>
      </section>
    </>
  );
}
