import React from "react";
import styles from "./ContactUs.module.scss";
import dictionary from "@/i18n/dictionary.json";

export const ContactUs = () => {
  return (
    <section className={styles.kontakt} id="contact">
      <h2 className={styles.heading}>{dictionary["contactUs.contact"]}</h2>

      <form action="#">
        <input type="text" className={styles.name} placeholder={dictionary["contactUs.NameSurname"]} required />
        <input type="number" className={styles.phone} placeholder={dictionary["contactUs.phoneNumber"]} required />

        <textarea className={styles.message} name="" id="" cols={30} rows={10} placeholder={dictionary["contactUs.message"]}></textarea>

        <button type="submit" className={styles.btn}>
          {dictionary["contactUs.send"]}
        </button>
      </form>
    </section>
  );
};
