import React from "react";
import style from "./nav.module.css";

function Nav() {
  return (
    <div className={style.navbar}>
      <div className={style.navbar_name}>
        <h1>
          fast <span> wreting uz</span> 
        </h1>
      </div>
      <div className={style.navbar_list}>
        <ul>
          <li className="active">Sinov rejimi</li>
          <li>Online bellashuv</li>
          <li>Musobaqa</li>
          <li>yordam</li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
