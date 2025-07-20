import "./globals.css";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Provider } from "./provider";
import { SwitchLanguage } from "../components/SwitchLanguage";
import { firaSans } from "../utils/fonts";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  let title, description, keywords;

  if (locale === "bg") {
    title = "Бар Пощата | barthepost.bg";
    description =
      "Потопи се в света на миксологията, където зад всяка поръчка стои почеркът на нашите бармани... а коктейлите разказват истории, които ще искаш да чуеш отново и отново...";
    keywords = [
      "Пощата",
      "бар Пощата",
      "Пощата Пловдив",
      "бар Пловдив",
      "Пловдив",
      "коктейл бар Пловдив",
      "парти",
      "коктейли",
      "атмосфера",
      "нощен живот",
      "bar The Post",
      "The Post Plovdiv",
      "bar Plovdiv",
      "Plovdiv",
      "cocktail bar Plovdiv",
      "parties",
      "cocktails",
      "vibe",
      "nightlife",
    ];
  } else if (locale === "en") {
    title = "Bar The Post | barthepost.bg";
    description =
      "Immerse yourself in the world of mixology, where every order carries the signature of our bartenders...and the cocktails tell stories you’ll want to hear again and again...";
    keywords = [
      "Пощата",
      "бар Пощата",
      "Пощата Пловдив",
      "бар Пловдив",
      "Пловдив",
      "коктейл бар Пловдив",
      "парти",
      "коктейли",
      "атмосфера",
      "нощен живот",
      "bar The Post",
      "The Post Plovdiv",
      "bar Plovdiv",
      "Plovdiv",
      "cocktail bar Plovdiv",
      "parties",
      "cocktails",
      "vibe",
      "nightlife",
    ];
  }

  const alternates = {
    canonical: locale === "en" ? "/en" : "/",
    languages: {
      bg: "/bg",
      en: "/en",
    },
  };

  const metadataBase = new URL("https://barthepost.bg");

  return {
    title,
    description,
    keywords,
    alternates,
    metadataBase,
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale}>
      <body className={`${firaSans.className} antialiased`}>
        <Provider locale={locale}>
          <Navbar />
          <SwitchLanguage />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
