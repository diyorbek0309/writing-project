import React from "react";
import classes from "./Home.module.css";
import { useTranslation } from "react-i18next";

const Modal = ({ correctText, percent, setWorking, resetAll }) => {
  const { t } = useTranslation();
  return (
    <div className={classes.Modalcontainer}>
      <p className={classes.Modal_par}>{t("your_result")}</p>
      <div className={classes.Modal}>
        <h2 style={{ marginBottom: 20, color: "#000" }}>
          {localStorage.getItem("firstName") +
            " " +
            localStorage.getItem("lastName")}
        </h2>

        <div className={classes.Result}>
          <p style={{ fontSize: "50px", lineHeight: "130px" }}>
            {correctText.split(" ").length - 1} wpm
          </p>
        </div>

        <div
          style={{
            margin: "20px 0 0 0",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h2 style={{ color: "#000", fontSize: "1rem" }}>
            {Math.round(percent * 100)} % {t("done")}
          </h2>
          <progress
            min="0"
            max="100"
            value={Math.round(percent * 100)}
          ></progress>
        </div>
        <button
          className={classes.Ortga}
          onClick={() => {
            setWorking(true);
            resetAll();
          }}
        >
          {t("back")}
        </button>
      </div>
    </div>
  );
};
export default Modal;
