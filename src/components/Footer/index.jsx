import React from "react";

import logo from "../../assets/img/Logo.svg";

import style from "./Footer.module.scss";

function Footer() {
  return (
    <div className={style.root}>
      <div className="row1">
        <img src={logo} />
        <div className="text">
          <a href="#professionalitet">
            <p>О проекте</p>
          </a>
          <a href="#orientation">
            <p>Направления</p>
          </a>
          <a href="#partners">
            <p>Партнеры</p>
          </a>
        </div>
      </div>
      <div className="row2">
        <p>© 2025 Профессионалитет. Все права защищены.</p>
      </div>
    </div>
  );
}
export default Footer;
