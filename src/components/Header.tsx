"use client";
import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import classNames from "classnames";
import dictionary from "@/i18n/dictionary.json";
import config from "@/config.json";

const { links } = config;

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{ width?: number; height?: number }>({
    width: undefined,
    height: undefined,
  });

  // function to be called when window resizes
  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  // Add event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

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

  const menu = (
    <>
      <a href={links.buy} target="_blank">{dictionary["menu.buy"]}</a>
      {/* <a href="#sell">{dictionary["menu.sell"]}</a> */}
      <a href={links.rent} target="_blank">{dictionary["menu.rent"]}</a>
      {/* <a href="#NIERUCHOMOŚCI">NIERUCHOMOŚCI</a> */}
      <a href="#footer">{dictionary["contactUs.contact"]}</a>
    </>
  );

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
        <div className={classNames("desktop:flex phone:hidden", styles.menu)}>
          {menu}
        </div>

        <button
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
          className="desktop:hidden text-4xl cursor-pointer"
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
       {menu}
      </nav>
    </header>
  );
};
