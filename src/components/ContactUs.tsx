import React from "react";
import styles from "./ContactUs.module.scss";

export const ContactUs = () => {
  return (
    <section className={styles.kontakt} id="kontakt">
      <h2 className={styles.heading}>Kontakt</h2>

      <form action="#">
        <input type="text" className={styles.name} placeholder="Imię Nazwisko" required />
        <input type="number" className={styles.phone} placeholder="Numer telefonu" required />

        <textarea className={styles.message} name="" id="" cols={30} rows={10} placeholder="Wiadomość"></textarea>

        <button type="submit" className={styles.btn}>
          wyślij
        </button>
      </form>
    </section>
  );
};
