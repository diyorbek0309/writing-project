import React from "react";
import { Switch } from "./Utils";
import styles from "./Home.module.css";
import refresh_icon from "../assets/refresh_icon.png";
import t_icon from "../assets/t_icon.png";
import arial_t from "../assets/arial_t.png";

const HSideleft = ({
  toggleArial,
  toggleTimes,
  resetAll,
}) => {
  return (
    <div className={styles.HSideleft}>
      <button className={styles.active} onClick={resetAll}>
        <img src={refresh_icon} alt="Refresh" />
      </button>
      <Switch
        img1={t_icon}
        img2={arial_t}
        toggleLight={toggleArial}
        toggleDark={toggleTimes}
      />
      
    </div>
  );
};

export default HSideleft;
