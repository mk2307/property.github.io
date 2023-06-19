import React from "react";
import styles from "./Events.module.scss";

export const Events = () => {
  return (
    <section className={styles.events} id="events">
      <div className={styles.title}>
        <h2>{"W czym możemy pomóc"}</h2>
        <div className="line"></div>
      </div>
      <div className={styles.tiles}>
        <img src="img/sprzedazedit.jpg" alt="sprzedaz" />
        <img src="img/zakupedit.jpg" alt="zakup" />
        <img src="img/wynajemedit.jpg" alt="wynajem" />
        <img src="img/wycenaedit.jpg" alt="wycena" />
        <img src="img/finansowanieedit.jpg" alt="finansowanie" />
        <img src="img/zarzadanieedit.jpg" alt="zarzadzanie" />
      </div>
    </section>
  );
};
