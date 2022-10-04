import React from "react";
import styles from "./Home.module.css";

const HMain = ({ correctText, text, handleChange }) => {
  return (
    <div className={styles.HMain}>
      <input
        type="text"
        className={styles.Main_input}
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
