// components/DarkModeToggle.js
"use client";
import { useState, useEffect } from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(true); // Cambiado a true por defecto

  useEffect(() => {
    // Como nuestra paleta es oscura por defecto, forzamos dark mode
    document.documentElement.classList.add("dark");
    localStorage.setItem("darkMode", "true");
    setDarkMode(true);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-card-bg text-white hover:bg-hover-bg transition compact-button"
      aria-label="Alternar modo oscuro"
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}
