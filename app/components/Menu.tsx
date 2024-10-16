"use client";

import { KyivMachine, LemonTuesday } from "@/app/utils/fonts";
import { useCurrentLocale, useI18n } from "@/locales/client";
import { useMemo, useState } from "react";

import Image from "next/image";
import MenuCard from "./MenuCard";
import decor1 from "@/public/decor-7.webp";
import decor2 from "@/public/decor-8.webp";
import decor3 from "@/public/decor-9.webp";
import decor4 from "@/public/decor-10.webp";
import decor5 from "@/public/decor-11.webp";
import menuListBG from "../menuList/menuListBG.json";
import menuListEN from "../menuList/menuList.json";

export default function Menu() {
  const t = useI18n();
  const locale = useCurrentLocale();
  const [selectedTab, setSelectedTab] = useState("");

  const menuList = locale === "bg" ? menuListBG : menuListEN;

  const imageDecor = useMemo(() => {
    switch (selectedTab) {
      case "Non-alcoholic Drinks":
        return decor1;
      case "Mixed Drinks":
        return decor2;
      case "Wine":
        return decor3;
      case "Alcohol":
        return decor4;
      case "Beer":
        return decor5;
      default:
        return decor1;
    }
  }, [selectedTab]);

  const renderMenu = () => {
    const selectedCategory = menuList.menu.filter(
      (item) => item.category === selectedTab
    );
    const categoryNameObj = menuList.menu.find(
      (item) => item.category === selectedTab
    );

    let categoryName = "";

    if (categoryNameObj) {
      categoryName = categoryNameObj.category;

      switch (categoryName) {
        case "Non-alcoholic Drinks":
          if (locale === "bg") categoryName = "Безалкохолни Напитки";
          break;
        case "Mixed Drinks":
          if (locale === "bg") categoryName = "Смесени напитки";
          break;
        case "Wine":
          if (locale === "bg") categoryName = "Вино";
          break;
        case "Alcohol":
          if (locale === "bg") categoryName = "Алкохол";
          break;
        case "Beer":
          if (locale === "bg") categoryName = "Бира";
          break;
        default:
          break;
      }
    }

    if (selectedCategory && categoryNameObj && categoryName) {
      return (
        <div className="mb-10">
          <h2 className="text-center my-4 text-[36px] md:text-[44px]">
            {categoryName}
          </h2>
          {selectedCategory.map((item) => (
            <div
              key={item.id}
              className="max-w-[800px] w-[90vw] lg:w-[70vw] mx-auto flex flex-col mt-2"
              // className="w-full mx-auto flex flex-col"
            >
              {item["semi-category"] && (
                <h3
                  className={`text-center mt-2 text-[22px] md:text-[24px] ${KyivMachine.className}`}
                >
                  {item["semi-category"]}
                </h3>
              )}
              <div className="flex items-center">
                <h4 className="font-bold text-[16px] md:text-[20px]">
                  {item.name}
                </h4>
                <span className="flex-grow border-b border-dotted mx-2 pt-1.5 border-gray-300 md:border-black" />
                <span className="font-bold text-[14px] md:text-[20px]">
                  {`${item.price} / ${item.quantity}`}
                </span>
              </div>
              {item.description && (
                <p className="text-left pr-[40%] text-[14px] md:text-[16px]">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      );
    } else {
      return <div />;
    }
  };

  return (
    <>
      <section className="max-w-[1440px] mx-auto min-h-screen mt-20 px-4">
        <div className="w-full grid grid-cols-1 items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center">
            <h1
              className={`text-6xl lg:text-8xl text-center ${KyivMachine.className}`}
            >
              {t("menu.title")}
            </h1>
            <div className="hidden md:flex justify-center z-10">
              <Image
                src={imageDecor}
                alt="Cocktails"
                className="w-[400px] h-auto"
              />
            </div>
            <p
              className={`hidden md:block text-xl lg:text-3xl text-center ${LemonTuesday.className}`}
            >
              &quot;Good vibes and <br /> even better cocktails. &quot;
            </p>
          </div>

          <div className="md:border-4 md:border-[#30312a] px-4 sm:px-20 py-16 -mt-28 md:-mt-20 lg:-mt-32 text-center lg:text-left">
            <div className="flex flex-col items-center mt-16 sm:mt-20">
              <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-0 sm:gap-1">
                <MenuCard
                  text1={t("menu.softDrinks")}
                  onClick={() => setSelectedTab("Non-alcoholic Drinks")}
                  active={selectedTab === "Non-alcoholic Drinks"}
                />
                <MenuCard
                  text1={t("menu.mixedDrinks")}
                  onClick={() => setSelectedTab("Mixed Drinks")}
                  active={selectedTab === "Mixed Drinks"}
                />
                <MenuCard
                  text1={t("menu.wine")}
                  onClick={() => setSelectedTab("Wine")}
                  active={selectedTab === "Wine"}
                />
                <MenuCard
                  text1={t("menu.alcohol")}
                  onClick={() => setSelectedTab("Alcohol")}
                  active={selectedTab === "Alcohol"}
                />
                <MenuCard
                  text1={t("menu.beer")}
                  onClick={() => setSelectedTab("Beer")}
                  active={selectedTab === "Beer"}
                />
              </div>
              {renderMenu()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
