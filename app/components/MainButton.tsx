import { AmericanTypewriter } from "../utils/fonts";
import Link from "next/link";
import button from "@/public/button.png";

export default function MainButton() {
  return (
    <Link
      href="/#contact"
      className="relative w-44 lg:w-60 h-10 lg:h-14 flex items-center justify-center text-white text-sm lg:text-base"
      style={{
        backgroundImage: `url(${button.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <span className={`z-10 ${AmericanTypewriter.className}`}>
        СВЪРЖИ СЕ С НАС
      </span>
    </Link>
  );
}
