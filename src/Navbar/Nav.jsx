import React from "react";
import { Link } from "react-router-dom";
import style from "./nav.module.css";
import { useTranslation } from "react-i18next";

function Nav() {
  const { t, i18n } = useTranslation();
  const lang = localStorage.getItem("lang") || "uz";

  const langHandler = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className={style.navbar}>
      <div className={style.navbar_name}>
        <h1>
          fast <span> write uz</span>
        </h1>
      </div>
      <div className={style.navbar_list}>
        <ul>
          <li className="active">
            <Link to="/">{t("navbar1")}</Link>
          </li>
          <li>
            <Link to="history">{t("navbar2")}</Link>
          </li>
          <li>
            <Link to="competition">{t("navbar3")}</Link>
          </li>
          <li>
            <Link to="help">{t("navbar4")}</Link>
          </li>
        </ul>
      </div>
      <div className="select">
        <select name="lang" id="lang" onChange={langHandler}>
          <option value="uz">UZ</option>
          <option value="en">EN</option>
        </select>
      </div>
      <h2>
        {localStorage.getItem("firstName")
          ? localStorage.getItem("firstName") +
            " " +
            localStorage.getItem("lastName")
          : ""}
      </h2>
    </div>
  );
}

export default Nav;
