import React from "react";
import styles from "./Hero.module.scss";
import classNames from "classnames";

export const Hero = () => {
    return <section className={styles.home} id="home">
        <div className={styles.homeContent}>
            <h1>Witaj w naszym biurze</h1>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ipsum, rem ad sequi ab accusantium neque
                nemo animi hic voluptate reprehenderit earum recusandae quos officiis dolorem nostrum quidem illo quia.
            </p>

            <div className={classNames("btn-box ", styles.homeNav)}>
                <a href="#">KUP</a>
                <a href="sprzedaj.html">SPRZEDAJ</a>
                <a href="#">WYNAJMIJ</a>
            </div>
        </div>

        <div className={styles.homeSci}>
            <a href="#">
                <i className="bx bxl-instagram"></i>
            </a>
            <a href="#">
                <i className="bx bxl-tiktok"></i>
            </a>
            <a href="#">
                <i className="bx bxl-facebook"></i>
            </a>
        </div>
    </section>
}