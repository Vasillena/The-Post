"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import logoSavy from "@/public/savy.svg";

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
      <div className="max-w-[1440px] mx-auto flex items-center sm:items-end mb-4 px-2">
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
          <div className="sm:border-t sm:border-[#1A1A1A] py-6 ml-20 flex flex-col md:flex-row justify-between font-light text-center md:text-left">
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
