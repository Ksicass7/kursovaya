import React from 'react';
import style from './Burger.module.scss';

const Burger = () => {
  return (
    <div className={style.menu}>
      <input type="checkbox" id="burgerCheckbox" className={style.burgerCheckbox} />
      <label htmlFor="burgerCheckbox" className={style.burger}></label>
      <ul className={style.menuList}>
        <li><a href="#professionalitet" className={style.menuItem}>О проекте</a></li>
        <li><a href="#orientation" className={style.menuItem}>Направления</a></li>
        <li><a href="#partners" className={style.menuItem}>Партнеры</a></li>
        <li><a href="#form" className={style.menuItem}>Обратная связь</a></li>
      </ul>
    </div>
  );
};

export default Burger;
