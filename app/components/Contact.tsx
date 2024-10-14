import { KyivMachine, firaSans } from "../utils/fonts";

import Image from "next/image";
import decor from "@/public/decor-5.png";

export function Contact(): JSX.Element {
  return (
    <>
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 xl:pl-10 mt-14">
        <div className="w-full grid grid-cols-1 xl:grid-cols-4  items-center">
          <div className="xl:absolute flex justify-center z-10">
            <Image src={decor} alt="Phone" className="w-[600px] h-auto" />
          </div>
          <div className="xl:col-span-3 xl:col-start-2 border-4 border-[#30312a] px-4 sm:px-20 xl:pl-60 xl:pr-32 py-16 -mt-32 sm:-mt-40 xl:mt-0">
            <h1
              className={`relative text-3xl lg:text-4xl text-center sm:text-left z-20 ${KyivMachine.className}`}
            >
              Свържете се с нас
            </h1>
            <div className="relative mt-12 flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-0 text-center sm:text-left z-20">
              <div>
                <h3 className={`text-xl lg:text-2xl ${KyivMachine.className}`}>
                  Адрес
                </h3>
                <p className={`mt-4 text-lg lg:text-xl ${firaSans.className}`}>
                  Улица Гладстон 8,
                </p>
                <p className={`text-lg lg:text-xl ${firaSans.className}`}>
                  Plovdiv, Bulgaria 4000
                </p>
              </div>
              <div>
                <h3 className={`text-xl lg:text-2xl ${KyivMachine.className}`}>
                  Контакти
                </h3>
                <p className={`mt-4 text-lg lg:text-xl ${firaSans.className}`}>
                  +359 88 8209286
                </p>
                <p className={`text-lg lg:text-xl ${firaSans.className}`}>
                  poshtata032@gmail.com
                </p>
              </div>
            </div>
            <div className="relative mt-12 flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-0 text-center sm:text-left z-20">
              <div>
                <h3 className={`text-xl lg:text-2xl ${KyivMachine.className}`}>
                  Работно време
                </h3>
                <p className={`mt-4 text-lg lg:text-xl ${firaSans.className}`}>
                  Неделя - Четвъртък 10:00 - 1:00
                </p>
                <p className={`text-lg lg:text-xl ${firaSans.className}`}>
                  Петък - Събота 10:00 - 3:00
                </p>
              </div>
              <div>
                <h3 className={`text-xl lg:text-2xl ${KyivMachine.className}`}>
                  Последвайте ни
                </h3>
                <p className={`mt-4 text-lg lg:text-xl ${firaSans.className}`}>
                  Facebook | @barthepost
                </p>
                <p className={`text-lg lg:text-xl ${firaSans.className}`}>
                  Instagram | @barthepost
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
