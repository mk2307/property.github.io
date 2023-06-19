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
        <li>
          <img src="img/sprzedazedit.jpg" alt="sprzedaz" />
        </li>
        <li>
          <img src="img/zakupedit.jpg" alt="zakup" />
        </li>
        <li>
          <img src="img/wynajemedit.jpg" alt="wynajem" />
        </li>
        <li>
          <img src="img/wycenaedit.jpg" alt="wycena" />
        </li>
        <li>
          <img src="img/finansowanieedit.jpg" alt="finansowanie" />
        </li>
        <li>
          <img src="img/zarzadanieedit.jpg" alt="zarzadzanie" />
        </li>
      </div>
    </section>
  );
};
