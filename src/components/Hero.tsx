import React from "react";
import styles from "./Hero.module.scss";
import classNames from "classnames";
import config from "@/config.json";
import dictionary from "@/i18n/dictionary.json";


const { links } = config;

export const Hero = () => {
  return (
    <section className={styles.home} id="home">
      <div className={styles.homeContent}>
        <h1>{dictionary["hero.welcome"]}</h1>

        <p>{dictionary["hero.description"]}</p>

        <div className={classNames("btn-box ", styles.homeNav)}>
          <a href={links.buy} target="_blank">{dictionary["menu.buy"]}</a>
          {/* <a href={links.sell}>{dictionary["menu.sell"]}</a> */}
          <a href={links.rent} target="_blank">{dictionary["menu.rent"]}</a>
        </div>
      </div>

      <div className={styles.homeSci}>
        <a href={links.instagram}>
          <i className="bx bxl-instagram" />
        </a>
        <a href={links.tiktok}>
          <i className="bx bxl-tiktok" />
        </a>
        <a href={links.facebook}>
          <i className="bx bxl-facebook" />
        </a>
      </div>
    </section>
  );
};
