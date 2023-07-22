import React from "react";
import styles from "./Events.module.scss";
import Image from "next/image";
import dictionary from "@/i18n/dictionary.json";


const imagesList: {
  src: string;
  alt: keyof typeof dictionary;
}[] = [
  {
    src: "/img/sprzedazedit.jpg",
    alt: "events.sell",
  },
  {
    src: "/img/zakupedit.jpg",
    alt: "events.buy",
  },
  {
    src: "/img/wynajemedit.jpg",
    alt: "events.rent",
  },
  {
    src: "/img/wycenaedit.jpg",
    alt: "events.evaluation",
  },
  {
    src: "/img/finansowanieedit.jpg",
    alt: "events.financing",
  },
  {
    src: "/img/zarzadanieedit.jpg",
    alt: "events.administration",
  },
]

export const Events = () => {
  return (
    <section className={styles.events} id="events">
      <div className={styles.title}>
        <h2>{dictionary["events.title"]}</h2>
        <div className="line"></div>
      </div>
      <div className={styles.tiles}>
        {
          imagesList.map((image, index) => (
            <li key={index}>
              <Image width={526} height={301} src={image.src} alt={dictionary[image.alt]} />
            </li>
          ))
        }
      </div>
    </section>
  );
};
