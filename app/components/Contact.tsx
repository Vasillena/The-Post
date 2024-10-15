import { KyivMachine, firaSans } from "../utils/fonts";

import Image from "next/image";
import decor from "@/public/decor-5.png";

type ContactCardProps = {
  title: string;
  lines: string[];
};

export function ContactCard({ title, lines }: ContactCardProps) {
  return (
    <div>
      <h3 className={`text-xl lg:text-2xl ${KyivMachine.className}`}>
        {title}
      </h3>
      {lines.map((line, index) => (
        <p key={index} className={`text-lg lg:text-xl ${firaSans.className}`}>
          {line}
        </p>
      ))}
    </div>
  );
}

export function Contact(): JSX.Element {
  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-6 xl:pl-10 mt-20">
      <div className="w-full grid grid-cols-1 xl:grid-cols-4 items-center">
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
            <ContactCard
              title="Адрес"
              lines={["Улица Гладстон 8,", "Plovdiv, Bulgaria 4000"]}
            />
            <ContactCard
              title="Контакти"
              lines={["+359 88 8209286", "poshtata032@gmail.com"]}
            />
          </div>

          <div className="relative mt-12 flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-0 text-center sm:text-left z-20">
            <ContactCard
              title="Работно време"
              lines={[
                "Неделя - Четвъртък 10:00 - 1:00",
                "Петък - Събота 10:00 - 3:00",
              ]}
            />
            <ContactCard
              title="Последвайте ни"
              lines={["Facebook | @barthepost", "Instagram | @barthepost"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
