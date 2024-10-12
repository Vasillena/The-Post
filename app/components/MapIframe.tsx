"use client";

import { useEffect } from "react";

export default function MapIframe() {
  useEffect(() => {
    const existingIframe = document.querySelector("#contact iframe");
    if (existingIframe) return;

    const iframe = document.createElement("iframe");
    iframe.src = "https://snazzymaps.com/embed/650252";
    iframe.width = "100%";
    iframe.height = "500px";
    iframe.style.border = "none";
    iframe.loading = "lazy";
    iframe.title = "Custom map showing location";

    const container = document.getElementById("contact");
    if (container) {
      container.appendChild(iframe);
    }
  }, []);

  return <div className="w-[100vw] h-[500px] mt-32" id="contact" />;
}
