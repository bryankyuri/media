import React, { useState } from "react";
import { Link } from "react-router-dom";
import Style from "./Header.module.scss";

const Header = () => {
  return (
    <div className={Style.wrapper} id="Header">
      <div className={Style.container__main}>
        <div className={Style.col__logo}>logo</div>
        <div className={Style.col__menu}>
          <Link to="" className={Style.menu__item}>
            About
          </Link>
          <Link to="/line-up" className={Style.menu__item}>
            Line Up
          </Link>
          <Link to="" className={Style.menu__item}>
            Ticket
          </Link>
          <Link to="" className={Style.menu__item}>
            Merch
          </Link>
          <Link to="" className={Style.menu__item}>
            Media
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
