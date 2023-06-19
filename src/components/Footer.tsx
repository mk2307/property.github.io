import React from "react";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerText}>
        <p>
          <strong>Skontaktuj się z nami:</strong>
        </p>
        <p>333 444 555</p>
        <p>homeplus@gmail.com</p>
      </div>

      <div className={styles.private}>
        <a href="#">Polityka prywatności</a>
      </div>
      <div className={styles.info}>
        <p>
          <br />
          Co znajdziesz na tej stronie:
          <br />
          Biuro Nieruchomości,
          <br />
          Kupno Nieruchomości,
          <br />
          Sprzedaż Nieruchomości
          <br />
          Wynajem Nieruchomości
        </p>
      </div>
    </footer>
  );
};
