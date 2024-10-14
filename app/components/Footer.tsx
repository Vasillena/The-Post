"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import logoSavy from "@/public/savy.svg";

// import socials1 from "@/public/socials-4.png";
// import socials2 from "@/public/socials-3.png";

export default function Footer(): JSX.Element {
  return (
    <div
      className="max-w-screen mt-20"
      style={{
        backgroundImage: 'url("/bg.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-[1440px] mx-auto flex items-end mb-12 px-2">
        <div>
          <Image
            src={logo}
            alt="Logo"
            priority
            style={{
              width: "126px",
              height: "auto",
            }}
          />
        </div>
        <div className="w-full flex flex-col">
          <div className=" mb-6 self-end flex gap-6">
            <Link
              href="https://www.facebook.com/Qbarplovdiv"
              aria-label="Facebook"
              target="_blank"
              className="relative inline-block transition-shadow duration-300 ease-in-out "
            >
              {/* <div
                className="relative w-6 h-6  overflow-hidden shadow-none hover:shadow-[0_0_20px_#B96001] dark:hover:shadow-[0_0_20px_#FFD70080]"
                style={{
                  borderRadius: "8px",
                }}
              >
                <Image src={socials1} alt="Socials" className="w-6 h-auto " />
              </div> */}
            </Link>
            <Link
              href="https://www.instagram.com/qbarplovdiv/"
              aria-label="Instagram"
              target="_blank"
              className="relative inline-block transition-shadow duration-300 ease-in-out"
            >
              {/* <div
                className="relative w-6 h-6  overflow-hidden shadow-none hover:shadow-[0_0_20px_#B96001] dark:hover:shadow-[0_0_20px_#FFD70080]"
                style={{
                  borderRadius: "8px",
                }}
              >
                <Image src={socials2} alt="Instagram" className="w-6 h-auto" />
              </div> */}
            </Link>
          </div>
          <div className="border-t border-[#1A1A1A] py-6 ml-20 flex flex-col md:flex-row justify-between font-light text-center md:text-left">
            <div>
              <p>Copyright © 2024 - All rights reserved</p>
            </div>
            <div className="flex gap-2 justify-center items-end">
              <p>Design & Build by </p>
              <Link
                href="https://savy-creations.vercel.app"
                aria-label="Savy Creations"
                target="_blank"
                className="relative inline-block transition-shadow duration-300 ease-in-out"
              >
                <Image
                  src={logoSavy}
                  alt="Savy logo"
                  className="w-12 mb-[2px] h-auto"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
