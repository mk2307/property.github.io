import React from "react";
import styles from "./NotImplemented.module.scss";

export const NotImplemented = ({pageName}: { pageName?: string}) => {
  const title = pageName ? `Strona ${pageName} w budowie` : "Strona w budowie";
  return (
    <div className={styles.notImplemented}>
      <h1>{title}</h1>
      <p>Przepraszamy za utrudnienia</p>

    </div>
  );
}
