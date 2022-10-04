import React from "react";
import { Switch } from "./Utils";
import styles from "./Home.module.css";
import sun_icon from "../assets/sun_icon.png";
import moon_icon from "../assets/moon_icon.png";
import refresh_icon from "../assets/refresh_icon.png";
import t_icon from "../assets/t_icon.png";
import arial_t from "../assets/arial_t.png";

const HSideleft = ({ toggleLight, toggleDark, toggleArial, toggleTimes, resetAll }) => {



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
      <Switch
        img1={sun_icon}
        img2={moon_icon}
        toggleLight={toggleLight}
        toggleDark={toggleDark}
      />
    </div>
  );
};

export default HSideleft;
