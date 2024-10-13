import Image from "next/image";
import Menu from "./Menu";
import decor1 from "@/public/decor-4.png";

export function MenuHome(): JSX.Element {
  return (
    <>
      <section className="max-w-[1440px] mx-auto px-10 mt-32">
        <div className="w-full grid grid-cols-1 lg:grid-cols-5  items-center">
          <div className="lg:col-span-4 border-4 border-[#30312a] pl-2 pr-40 py-24">
            <Menu />
          </div>
          <div className="absolute right-40">
            <Image src={decor1} alt="Cocktails" className="w-[451px] h-auto" />
          </div>
        </div>
      </section>
    </>
  );
}
