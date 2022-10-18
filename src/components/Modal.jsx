import React from "react";
import classes from "./Home.module.css";

const Modal = ({ correctText, percent, setWorking, resetAll }) => {
  return (
    <div className={classes.Modalcontainer}>
      <p className={classes.Modal_par}>Sizning natijangiz.</p>
      <div className={classes.Modal}>
        <h2 style={{ marginBottom: 20 }}>
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
          <h2>{Math.round(percent * 100)} </h2>
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
          Ortga
        </button>
      </div>
    </div>
  );
};  
export default Modal;
