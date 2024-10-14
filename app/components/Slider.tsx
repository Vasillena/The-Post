"use client";

import Image from "next/image";
import Ticker from "framer-motion-ticker";
import image1 from "@/public/1.png";
import image2 from "@/public/2.png";
import image3 from "@/public/3.png";

const slides = [
  { image: image1 },
  { image: image2 },
  { image: image3 },
  { image: image1 },
  { image: image2 },
  { image: image3 },
  { image: image1 },
  { image: image2 },
  { image: image3 },
];

export default function Slider(): JSX.Element {
  return (
    <>
      <div className="max-w-[1440px] mx-auto mt-20 sm:mt-32">
        <div className="relative h-full  py-2 w-full">
          {/* <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute left-[-10px] top-0 w-1/4 h-full bg-gradient-to-r from-[#e4ded4] to-transparent blur-sm z-20"></div>
          <div className="absolute right-[-10px] top-0 w-1/4 h-full bg-gradient-to-l from-[#e4ded4] to-transparent blur-sm z-20"></div>
        </div> */}

          <div>
            <Ticker duration={100}>
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[280px] flex items-center justify-center h-[395px] mx-2 group "
                >
                  <div className="flex items-center justify-center h-full ">
                    <Image
                      src={slide.image}
                      alt="Party"
                      width={316}
                      height={395}
                      className="transition-transform duration-300 hover:scale-150 hover:z-30"
                    />
                  </div>
                </div>
              ))}
            </Ticker>
          </div>
        </div>
      </div>
      <div id="contact" />
    </>
  );
}
