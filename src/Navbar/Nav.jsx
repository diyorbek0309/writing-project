import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { useTranslation } from "react-i18next";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const lang = localStorage.getItem("lang") || "uz";

  const langHandler = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="navbar">
      <div className="navbar_name">
        <h1>
          fast <br />
          write uz
        </h1>
      </div>
      <div className={`navbar_list ${isOpen && "open"}`}>
        {/* <ul>
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
        </ul> */}
        <a href="">
          <Link to="/">{t("navbar1")}</Link>
        </a>
        <a href="">
          <Link to="history">{t("navbar2")}</Link>
        </a>
        <a href="">
          <Link to="competition">{t("navbar3")}</Link>
        </a>
        <a href="">
          <Link to="help">{t("navbar4")}</Link>
        </a>
      </div>
      <div className="select">
        <select name="lang" id="lang" onChange={langHandler} value={lang}>
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
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
}

export default Nav;
