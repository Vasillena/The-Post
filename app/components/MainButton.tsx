import { AmericanTypewriter } from "../utils/fonts";
import Link from "next/link";
import button from "@/public/button.png";

export default function MainButton() {
  return (
    <Link
      href="/#contact"
      className="relative w-full md:w-60 h-16 md:h-14 flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${button.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
      <span className={`z-10 ${AmericanTypewriter.className}`}>
        СВЪРЖИ СЕ С НАС
      </span>
    </Link>
  );
}
