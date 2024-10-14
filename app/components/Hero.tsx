import { AmericanTypewriter, LemonTuesday } from "../utils/fonts";

import Image from "next/image";
import MainButton from "./MainButton";
import cocktail from "@/public/hero-2.png";

export function Hero(): JSX.Element {
  return (
    <>
      <section className="max-w-[1440px] mx-auto">
        <div
          className={`w-full h-screen grid grid-cols-1 xl:grid-cols-2 justify-center items-center px-4 sm:px-10 md:bg-[url(/hero.png)] md:bg-cover md:bg-no-repeat md:bg-center`}
          style={{
            // backgroundImage: `url(${hero1.src})`,
            backgroundSize: "94%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        >
          <div className="hidden xl:block xl:ml-14 border-r-4 border-[#30312a]">
            <Image
              src={cocktail}
              alt="Cocktail"
              priority
              className="w-[600px] h-auto"
            />
          </div>
          <div className="xl:mr-14 max-w-[600px] xl:max-w-[440px] justify-self-center text-center xl:text-left">
            <h1
              className={`mb-10 xl:mb-40 text-3xl lg:text-4xl ${AmericanTypewriter.className}`}
            >
              Заповядай в <br /> Bar “The Post”
            </h1>
            <p
              className={`text-xl lg:text-2xl underline underline-offset-8 leading-[2] ${AmericanTypewriter.className}`}
            >
              Потопи се в света на миксологията, където зад всяка поръчка стои
              почеркът на нашите бармани...
            </p>
            <p
              className={`mt-8 mb-10 xl:mb-20 text-lg lg:text-xl ${LemonTuesday.className}`}
            >
              ... а коктейлите разказват истории, които ще искаш да чуеш отново
              и отново...
            </p>
            <div className="flex justify-center xl:justify-start">
              <MainButton />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
