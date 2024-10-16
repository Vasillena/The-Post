"use client";

import Image from "next/image";
import Ticker from "framer-motion-ticker";
import image1 from "@/public/1.webp";
import image10 from "@/public/10.webp";
import image11 from "@/public/11.webp";
import image12 from "@/public/12.webp";
import image13 from "@/public/13.webp";
import image14 from "@/public/14.webp";
import image15 from "@/public/15.webp";
import image16 from "@/public/16.webp";
import image2 from "@/public/2.webp";
import image3 from "@/public/3.webp";
import image4 from "@/public/4.webp";
import image5 from "@/public/5.webp";
import image6 from "@/public/6.webp";
import image7 from "@/public/7.webp";
import image8 from "@/public/8.webp";
import image9 from "@/public/9.webp";

const slides = [
  { image: image1 },
  { image: image2 },
  { image: image3 },
  { image: image4 },
  { image: image5 },
  { image: image6 },
  { image: image7 },
  { image: image8 },
  { image: image9 },
  { image: image10 },
  { image: image11 },
  { image: image12 },
  { image: image13 },
  { image: image14 },
  { image: image15 },
  { image: image16 },
];

export default function Slider(): JSX.Element {
  return (
    <>
      <div className="max-w-[1440px] mx-auto mt-6">
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
