import { KyivMachine, LemonTuesday, firaSans } from "../utils/fonts";

import Image from "next/image";
import MainButton from "./MainButton";
import decor from "@/public/decor-1.png";

export function Second(): JSX.Element {
  return (
    <>
      <section className="max-w-[1440px] mx-auto px-4 sm:px-10 sm:mt-20">
        <h1
          className={`hidden lg:block xl:hidden mb-8 text-3xl lg:text-4xl text-center ${KyivMachine.className}`}
        >
          Всяка напитка в Bar “The Post” е писмо до теб – запечатано с история,
          вкус и вдъхновение
        </h1>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-20">
          <div className="justify-self-center text-center lg:text-left order-2 lg:order-1">
            <h1
              className={`block lg:hidden xl:block text-3xl lg:text-4xl ${KyivMachine.className}`}
            >
              Всяка напитка в Bar “The Post” е писмо до теб – запечатано с
              история, вкус и вдъхновение
            </h1>
            <p
              className={`my-12 text-xl lg:text-2xl ${LemonTuesday.className}`}
            >
              Коктейлите ни не са просто напитки, а истории, написани от
              майстори на миксологията.
            </p>
            <p className={`mb-12 text-lg lg:text-xl ${firaSans.className}`}>
              В Bar “The Post” всеки коктейл носи почерка на бармана – вдъхновен
              от класиката, но винаги с нещо неочаквано. От свежи комбинации,
              които ще ти влязат като писмо в летен ден, до по-силни вкусове,
              които оставят дълбок отпечатък, нашите миксолози създават напитки,
              които разказват истории с всяка глътка. Готов ли си да чуеш
              следващата?
            </p>
            <div className="flex justify-center lg:justify-start">
              <MainButton href={"/menu"} text={"НАШЕТО МЕНЮ"} />
            </div>
          </div>
          <div className="justify-self-center lg:justify-self-end order-1 lg:order-2">
            <Image src={decor} alt="Cocktails" className="w-[580px] h-auto" />
          </div>
        </div>
      </section>
      <div id="about" />
    </>
  );
}
