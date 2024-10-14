import { AmericanTypewriter, LemonTuesday } from "../utils/fonts";

import Image from "next/image";
import MainButton from "./MainButton";
import decor1 from "@/public/decor-4.png";

export function MenuHome(): JSX.Element {
  return (
    <>
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-0 sm:mt-32">
        <div className="w-full grid grid-cols-1 lg:grid-cols-5  items-center">
          <div className="lg:col-span-4 border-4 border-[#30312a] px-4 sm:px-20 lg:pl-10 lg:pr-40 py-24 -mt-20 lg:mt-0 order-2 lg:order-1">
            <h2
              className={`block xl:hidden text-black text-3xl lg:text-4xl font-medium text-center lg:text-left px-4 py-1 ${AmericanTypewriter.className}`}
            >
              Ние препоръчваме
            </h2>
            <p
              className={`my-12 text-xl lg:text-2xl text-center lg:text-left ${LemonTuesday.className}`}
            >
              "Good vibes and even better cocktails."
            </p>

            <div className="w-full mx-auto flex flex-col">
              <div className="flex items-center">
                <h4 className="font-bold text-[16px] md:text-[20px]">
                  Cloudini
                </h4>
                <span className="flex-grow border-b border-dotted mx-2 pt-1.5 border-gray-300 md:border-black" />
                <span className="font-bold text-[14px] md:text-[20px]">
                  120ML / 9.50 BGN
                </span>
              </div>
              <p className="text-left pr-[40%] text-[14px] md:text-[16px]">
                Водка Reyka, Лактоферментирал грейпфрут, Сух вермут Dolin, Солен
                разтвор
              </p>
            </div>
            <div className="w-full mx-auto flex flex-col">
              <div className="flex items-center">
                <h4 className="font-bold text-[16px] md:text-[20px]">
                  Cloudini
                </h4>
                <span className="flex-grow border-b border-dotted mx-2 pt-1.5 border-gray-300 md:border-black" />
                <span className="font-bold text-[14px] md:text-[20px]">
                  120ML / 9.50 BGN
                </span>
              </div>
              <p className="text-left pr-[40%] text-[14px] md:text-[16px]">
                Водка Reyka, Лактоферментирал грейпфрут, Сух вермут Dolin, Солен
                разтвор
              </p>
            </div>
            <div className="w-full mx-auto flex flex-col">
              <div className="flex items-center">
                <h4 className="font-bold text-[16px] md:text-[20px]">
                  Cloudini
                </h4>
                <span className="flex-grow border-b border-dotted mx-2 pt-1.5 border-gray-300 md:border-black" />
                <span className="font-bold text-[14px] md:text-[20px]">
                  120ML / 9.50 BGN
                </span>
              </div>
              <p className="text-left pr-[40%] text-[14px] md:text-[16px]">
                Водка Reyka, Лактоферментирал грейпфрут, Сух вермут Dolin, Солен
                разтвор
              </p>
            </div>

            <div className="flex justify-center lg:justify-start mt-16">
              <MainButton />
            </div>
          </div>
          <div className="lg:-ml-48 order-1 lg:order-2 flex justify-center z-10">
            <Image src={decor1} alt="Cocktails" className="w-[388px] h-auto" />
          </div>
        </div>
      </section>
    </>
  );
}
