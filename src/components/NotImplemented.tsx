import React from "react";
import styles from "./NotImplemented.module.scss";
import dictionary from "@/i18n/dictionary.json";

export const NotImplemented = ({ pageName }: { pageName?: string }) => {
  const title = pageName
    ? dictionary["notImplemented.titleWithPageName"].replace("%pageName%", pageName)
    : dictionary["notImplemented.title"];
  return (
    <div className={styles.notImplemented}>
      <h1>{title}</h1>
      <p>{dictionary["notImplemented.description"]}</p>
    </div>
  );
};
