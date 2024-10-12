import { Fira_Sans_Condensed } from "next/font/google";
import localFont from "next/font/local";

// export const oswald = Oswald({
//   subsets: ["latin", "cyrillic"],
//   weight: ["200", "300", "400", "500", "600", "700"],
// });

export const firaSans = Fira_Sans_Condensed({
  subsets: ["latin", "cyrillic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const AmericanTypewriter = localFont({
  src: "../../public/AmericanTypewriter.ttf",
});
export const LemonTuesday = localFont({
  src: "../../public/LemonTuesday.otf",
});
