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
            <Link to="online-comp">{t("navbar2")}</Link>
          </li>
          <li>
            <Link to="competition">{t("navbar3")}</Link>
          </li>
          <li>
            <Link to="help">{t("navbar4")}</Link>
          </li>
          <li>
            <select name="lang" id="lang" onChange={langHandler} value={lang}>
              <option value="uz">UZ</option>
              <option value="en">EN</option>
            </select>
          </li>
        </ul>
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
