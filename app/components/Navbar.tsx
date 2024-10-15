"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import MainNav from "./MainNav";
import close from "@/public/close.svg";
import logo from "@/public/logo.png";
import menu from "@/public/menu.svg";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar(): JSX.Element {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [closeMenu, open]);

  useEffect(() => {
    closeMenu();
  }, [closeMenu, pathname]);

  return (
    <div className="max-w-[1440px]">
      <div
        className="max-w-[1440px] hidden fixed top-0 left-0 right-0 mx-auto md:block z-50 bg-[url(/bg-mobile.png)] sm:bg-[url(/bg.png)]"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="px-4 flex py-3 justify-center items-center">
          <MainNav>
            <Link href="/" className="ml-4 flex lg:ml-0 lg:mr-6 px-5">
              <Image src={logo} alt="Logo" priority className="w-16 h-auto" />
            </Link>
          </MainNav>
        </div>
      </div>
      <div
        className="
           max-w-[1440px] block fixed top-0 left-0 right-0 mx-auto md:hidden z-50 bg-[url(/bg-mobile.png)] sm:bg-[url(/bg.png)]"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="w-full flex h-16 justify-between items-center px-4">
          <div className="w-full">
            <div
              ref={buttonRef}
              className="w-12 h-12 flex justify-center items-center"
            >
              <button onClick={() => setOpen(!open)}>
                <Image
                  src={open ? close : menu}
                  alt="Menu image"
                  style={{
                    width: "32px",
                    height: "auto",
                  }}
                />
              </button>
            </div>
          </div>
          <div className="w-14 flex justify-center items-center">
            <Link href="/">
              <Image src={logo} alt="Logo" priority className="w-full h-auto" />
            </Link>
          </div>
        </div>
      </div>
      {open && (
        <motion.div
          ref={menuRef}
          className="fixed top-16 left-0 z-50 w-[41.5%] rounded-br-[3rem] flex flex-col justify-center bg-[#e4ded4]  py-8 pl-2"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div>
            <MainNav closeMenu={closeMenu} />
          </div>
        </motion.div>
      )}
    </div>
  );
}
