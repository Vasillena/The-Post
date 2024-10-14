"use client";

import { useEffect } from "react";

export default function MapIframe() {
  useEffect(() => {
    const existingIframe = document.querySelector("#map iframe");
    if (existingIframe) return;

    const iframe = document.createElement("iframe");
    iframe.src = "https://snazzymaps.com/embed/650252";
    iframe.width = "100%";
    iframe.height = "500px";
    iframe.style.border = "none";
    iframe.loading = "lazy";
    iframe.title = "Custom map showing location";

    const container = document.getElementById("map");
    if (container) {
      container.appendChild(iframe);
    }
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto w-screen h-[500px] mt-36" id="map" />
  );
}
