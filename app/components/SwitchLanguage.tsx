"use client";

import { useChangeLocale, useCurrentLocale } from "../../locales/client";

import { KyivMachine } from "../utils/fonts";
import stamp from "@/public/language.png";

export function SwitchLanguage(): JSX.Element {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();

  const handleChangeToEnglish = () => changeLocale("en");

  const handleChangeToBulgarian = () => changeLocale("bg");

  return (
    <>
      {locale !== "en" && (
        <button
          type="button"
          onClick={handleChangeToEnglish}
          className="fixed top-32 -right-2 w-12 h-10 flex items-center justify-center text-[#30312a] z-50"
          style={{
            backgroundImage: `url(${stamp.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-label="Switch to English"
        >
          <span className={`z-10 ${KyivMachine.className}`}>EN</span>
        </button>
      )}
      {locale !== "bg" && (
        <button
          type="button"
          onClick={handleChangeToBulgarian}
          className="fixed top-32 -right-2 w-12 h-10 flex items-center justify-center text-[#30312a] z-50"
          style={{
            backgroundImage: `url(${stamp.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-label="Switch to Bulgarian"
        >
          <span className={`z-10 ${KyivMachine.className}`}>BG</span>
        </button>
      )}
    </>
  );
}
