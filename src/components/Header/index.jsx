import React, { useState } from "react";

import logo from "../../assets/img/Logo.svg";
import style from "./Header.module.scss";
import Burger from "../Burger";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <div className={style.root}>
      <div className="content">
        <img src={logo} alt="Logo" />
        <div className={`text ${isMenuOpen ? "open" : ""}`}>
          <a href="#professionalitet">
            <p>О проекте</p>
          </a>
          <a href="#orientation">
            <p>Направления</p>
          </a>
          <a href="#partners">
            <p>Партнеры</p>
          </a>
          <a href="#form">
            <p>Обратная связь</p>
          </a>
        </div>

        <Burger />
      </div>
      <div className="line"></div>
    </div>
  );
}

export default Header;
