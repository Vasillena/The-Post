import { AmericanTypewriter, LemonTuesday } from "../utils/fonts";

import Image from "next/image";
import MainButton from "./MainButton";
import hero1 from "@/public/hero.png";
import hero2 from "@/public/hero-2.png";

export function Hero(): JSX.Element {
  return (
    <>
      <section className="max-w-[1440px] mx-auto">
        <div
          className="w-full h-screen grid grid-cols-1 lg:grid-cols-2 justify-center items-center px-10"
          style={{
            backgroundImage: `url(${hero1.src})`,
            backgroundSize: "94%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        >
          <div className="ml-12 border-r-4 border-[#30312a]">
            <Image
              src={hero2}
              alt="Cocktail"
              priority
              className="w-[600px] h-auto"
            />
          </div>
          <div className="mr-12 max-w-[440px] justify-self-center">
            <h1 className={`mb-40 text-4xl ${AmericanTypewriter.className}`}>
              Заповядай в <br /> Bar “The Post”
            </h1>
            <p
              className={`text-2xl underline underline-offset-8 leading-[2] ${AmericanTypewriter.className}`}
            >
              Потопи се в света на миксологията, където зад всяка поръчка стои
              почеркът на нашите бармани...
            </p>
            <p className={`mt-8 mb-20 text-xl ${LemonTuesday.className}`}>
              ... а коктейлите разказват истории, които ще искаш да чуеш отново
              и отново...
            </p>
            <MainButton />
          </div>
        </div>
      </section>
    </>
  );
}
