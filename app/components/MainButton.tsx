import { AmericanTypewriter } from "../utils/fonts";
import Link from "next/link";

export default function MainButton() {
  return (
    <Link
      href="/#contact"
      className={`relative inline-block px-8 py-5 text-slateblue bg-black rounded-lg ${AmericanTypewriter.className} `}
      style={{
        backgroundColor: "#1B1B1B",
        color: "white",
        textDecoration: "none",
        display: "inline-block",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <span className="relative z-10">СВЪРЖИ СЕ С НАС</span>
      <span
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "transparent",
          border: "2px dashed #CDC0AF",
          borderRadius: "8px",
          pointerEvents: "none",
        }}
      />
    </Link>
  );
}
