
"use client";
import { useEffect } from "react";

export default function ClickListener() {
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target;
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "click_general",
        tagName: target.tagName,
        id: target.id || "",
        classes: target.className || "",
        text: target.innerText?.slice(0, 50) || "",
        timestamp: new Date().toISOString(),
      });
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null; // es un listener, no renderiza nada
}
