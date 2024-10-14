import { AmericanTypewriter, firaSans } from "../utils/fonts";

import Image from "next/image";
import decor from "@/public/decor-6.png";

export function Contact(): JSX.Element {
  return (
    <>
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:pl-10 mt-20 sm:mt-32">
        <div className="w-full grid grid-cols-1 lg:grid-cols-4  items-center">
          <div className="lg:absolute flex justify-center z-10">
            <Image src={decor} alt="Phone" className="w-[500px] h-auto" />
          </div>
          <div className="lg:col-span-3 lg:col-start-2 border-4 border-[#30312a] px-4 sm:px-20 lg:pl-52 xl:pl-60 lg:pr-4 xl:pr-32 py-24 -mt-20 lg:mt-0">
            <h1
              className={`text-3xl lg:text-4xl text-center sm:text-left ${AmericanTypewriter.className}`}
            >
              Свържете се с нас
            </h1>
            <div className="mt-12 flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-0 text-center sm:text-left">
              <div>
                <h3
                  className={`text-xl lg:text-2xl ${AmericanTypewriter.className}`}
                >
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
                <h3
                  className={`text-xl lg:text-2xl ${AmericanTypewriter.className}`}
                >
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
            <div className="mt-12 flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-0 text-center sm:text-left">
              <div>
                <h3
                  className={`text-xl lg:text-2xl ${AmericanTypewriter.className}`}
                >
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
                <h3
                  className={`text-xl lg:text-2xl ${AmericanTypewriter.className}`}
                >
                  Последвайте ни
                </h3>
                <p className={`mt-4 text-lg lg:text-xl ${firaSans.className}`}>
                  Facebook | @Qbarplovdiv
                </p>
                <p className={`text-lg lg:text-xl ${firaSans.className}`}>
                  Instagram | @Qbarplovdiv
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
