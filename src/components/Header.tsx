"use client";
import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import classNames from "classnames";
import dictionary from "@/i18n/dictionary.json";
import config from "@/config.json";

const { links } = config;

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    setNavbar(window.scrollY >= 66);
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <header
      className={classNames(styles.header, {
        [styles.headerScroll]: navbar,
      })}
    >
      <div className="flex items-center justify-between">
        <a href="/" className={styles.logo}>
          {dictionary["metadata.title"]}
        </a>
        <button
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
          className={styles.menuIcon}
        >
          <i className={classNames("bx", { "bx-x": isMenuOpen, "bx-menu": !isMenuOpen })} id="menu-icon"></i>
        </button>
      </div>
      <nav
        className={classNames(styles.navbar, {
          [styles.navbarOpen]: isMenuOpen,
        })}
        onClick={() => {
          setIsMenuOpen(false);
        }}
      >
        <a href={links.buy}>{dictionary["menu.buy"]}</a>
        {/* <a href="/sprzedaj">SPRZEDAJ</a> */}
        <a href={links.rent}>{dictionary["menu.rent"]}</a>
        {/* <a href="#NIERUCHOMOŚCI">NIERUCHOMOŚCI</a> */}
        <a href="#kontakt">{dictionary["contactUs.contact"]}</a>
      </nav>
    </header>
  );
};
