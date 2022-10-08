import React from "react";
import classes from "./Home.module.css";

const Modal = ({ correctText, percent, resetAll }) => {
  return (
    <div className={classes.Modalcontainer}>
      <p className={classes.Modal_par}>Sizning natijangiz.</p>
      <div className={classes.Modal}>
        <h2>
          {localStorage.getItem("firstName") +
            " " +
            localStorage.getItem("lastName")}
        </h2>
        <h2>{Math.round(percent * 100)}%</h2>
        <div className={classes.Result}>
          <p style={{ fontSize: "50px", lineHeight: "130px" }}>
            {correctText.split(" ").length - 1} wpm
          </p>
        </div>
      </div>
      <button onClick={() => resetAll()}>Ortga</button>
    </div>
  );
};
export default Modal;
