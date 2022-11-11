import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Help.css";
import { helpTextUZ, helpTextEN } from "../text";
import Img from "./working.png";

function Help() {
  const { t } = useTranslation();

  // const text = "uz" ? helpTextUZ : helpTextEN;
  const helpText =
    localStorage.getItem("lang") === "uz" ? helpTextUZ : helpTextEN;

  // console.log(Math.random(helpTextUZ.split("").length) * 700);

  return (
    <div className="help_wrap">
      <div className="img_wrap">
        <img src={Img} />
      </div>
      <div className="text_wrap">
        <h1>{t("foydali")}</h1>
        <p>{helpText}</p>
      </div>
    </div>
  );
}

export default Help;
