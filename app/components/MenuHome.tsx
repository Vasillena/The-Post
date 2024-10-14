import { AmericanTypewriter } from "../utils/fonts";
import Image from "next/image";
import Menu from "./Menu";
import decor1 from "@/public/decor-4.png";

export function MenuHome(): JSX.Element {
  return (
    <>
      <section className="max-w-[1440px] mx-auto px-6 lg:px-0 mt-32">
        <div className="w-full grid grid-cols-1 lg:grid-cols-5  items-center">
          <div className="lg:col-span-4 border-4 border-[#30312a] px-20 lg:pl-10 lg:pr-40 py-24 order-2 lg:order-1">
            <h2
              className={`inline-block xl:hidden text-black text-3xl lg:text-4xl font-medium px-4 py-1 ${AmericanTypewriter.className}`}
            >
              МЕНЮ
            </h2>
            <Menu />
          </div>
          <div className="lg:-ml-28 order-1 lg:order-2 flex justify-center">
            <Image src={decor1} alt="Cocktails" className="w-[451px] h-auto" />
          </div>
        </div>
      </section>
    </>
  );
}
