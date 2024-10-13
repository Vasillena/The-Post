"use client";

import { useCurrentLocale, useI18n } from "@/locales/client";

import MenuCard from "./MenuCard";
import menuListBG from "../menuList/menuListBG.json";
import menuListEN from "../menuList/menuList.json";
import { useState } from "react";

export default function Menu() {
  const t = useI18n();
  const locale = useCurrentLocale();
  const [selectedTab, setSelectedTab] = useState("");

  const menuList = locale === "bg" ? menuListBG : menuListEN;

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
        case "Hot Drinks":
          if (locale === "bg") categoryName = "Топли Напитки";
          break;
        case "Soft Drinks":
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
        <div className="mb-10 h-[400px] overflow-y-scroll px-4">
          <h2 className="text-center my-4 text-[36px] md:text-[44px]">
            {categoryName}
          </h2>
          {selectedCategory.map((item) => (
            <div
              key={item.id}
              className="max-w-[880px] w-[100vw] mx-auto flex flex-col"
            >
              {item["semi-category"] && (
                <h3 className="text-center mt-2 text-[20px] md:text-[24px]">
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
      <div className="flex flex-col items-start">
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-0 md:gap-1">
          <h2 className={`text-black text-5xl font-medium px-4 py-1`}>МЕНЮ</h2>
          <MenuCard
            text1={t("menu.hotDrinks-1")}
            text2={t("menu.hotDrinks-2")}
            onClick={() => setSelectedTab("Hot Drinks")}
            active={selectedTab === "Hot Drinks"}
          />
          <MenuCard
            text1={t("menu.softDrinks-1")}
            text2={t("menu.softDrinks-2")}
            onClick={() => setSelectedTab("Soft Drinks")}
            active={selectedTab === "Soft Drinks"}
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
    </>
  );
}
