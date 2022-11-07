import React from "react";
import styles from "./Home.module.css";

const HMain = ({ correctText, text, handleChange, isLight }) => {
  return (
    <div className={styles.HMain}>
      <input
        type="text"
        className={isLight ? styles.Main_input : styles.tun}
        onChange={handleChange}
      />
      <div className={styles.Text}>
        <span className={styles.correctText}>{correctText}</span>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default HMain;
