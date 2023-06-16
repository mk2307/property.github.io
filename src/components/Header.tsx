"use client";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="top-0 left-0 fixed pl-4 pr-4 pt-2 bg-transparent flex flex-col z-30 w-screen">
      <div className="flex items-center justify-between">
        <a
          href="index.html"
          className="relative text-2xl text-[#ededed] font-semibold"
        >
          HOME PLUS
        </a>
        <button
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
          className="w-3 h-3"
        >
          <i
            className={`bx ${isMenuOpen ? "bx-x" : "bx-menu"}`}
            id="close-icon"
          ></i>
        </button>
      </div>
      <nav className={`flex flex-col items-end ${isMenuOpen ? "" : " hidden"}`}>
        <a href="#kup">KUP</a>
        <a href="sprzedaj.html">SPRZEDAJ</a>
        <a href="#WYNAJMIJ">WYNAJMIJ</a>
        <a href="#NIERUCHOMOŚCI">NIERUCHOMOŚCI</a>
        <a href="kontakt.html">KONTAKT</a>
      </nav>
    </header>
  );
};
