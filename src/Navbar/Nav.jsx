import React from "react";
import { Link } from "react-router-dom";
import style from "./nav.module.css";

function Nav() {
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
            <Link to="/">Sinov rejimi</Link>
          </li>
          <li>
            <Link to="online-comp">Online bellashuv</Link>
          </li>
          <li>
            <Link to="competition">Musobaqa</Link>
          </li>
          <li>
            <Link to="help">Yordam</Link>
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
