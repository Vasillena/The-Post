import Menu from "@/app/components/Menu";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  let title, description, keywords;

  if (locale === "bg") {
    title = "Меню | barthepost.bg";
    description = "Разгледайте нашето меню.";
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
      "меню",
      "bar The Post",
      "The Post Plovdiv",
      "bar Plovdiv",
      "Plovdiv",
      "cocktail bar Plovdiv",
      "parties",
      "cocktails",
      "vibe",
      "nightlife",
      "menu",
    ];
  } else if (locale === "en") {
    title = "Menu | barthepost.bg";
    description = "Browse our menu.";
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
      "меню",
      "bar The Post",
      "The Post Plovdiv",
      "bar Plovdiv",
      "Plovdiv",
      "cocktail bar Plovdiv",
      "parties",
      "cocktails",
      "vibe",
      "nightlife",
      "menu",
    ];
  }

  const alternates = {
    canonical: locale === "en" ? "/en/menu" : "/bg/menu",
    languages: {
      bg: "/bg/menu",
      en: "/en/menu",
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

export default async function MenuPage() {
  return <Menu />;
}
