"use client";
import { useState } from "react";
import styles from "./Header.module.scss";
import classNames from "classnames";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className={styles.header}>
      <div className="flex items-center justify-between">
        <a
          href="/"
          className={styles.logo}
        >
          HOME PLUS
        </a>
        <button
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
          className={styles.menuIcon}
        >
          <i
            className={`bx ${isMenuOpen ? "bx-x" : "bx-menu"}`}
            id="menu-icon"
          ></i>
        </button>
      </div>
      <nav className={classNames(styles.navbar,{
        [styles.navbarOpen]: isMenuOpen,
      })} onClick={()=> {
        setIsMenuOpen(false);
      }} >
        <a href="/kup">KUP</a>
        <a href="/sprzedaj">SPRZEDAJ</a>
        <a href="/wynajmij">WYNAJMIJ</a>
        {/* <a href="#NIERUCHOMOŚCI">NIERUCHOMOŚCI</a> */}
        <a href="#kontakt">KONTAKT</a>
      </nav>
    </header>
  );
};
