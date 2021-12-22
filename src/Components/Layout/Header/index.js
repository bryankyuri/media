import React from "react";
import { Link } from "react-router-dom";
import Style from "./Header.module.scss";

const Header = () => {
  return (
    <div className={Style.wrapper} id="Header">
      <div className={Style.container__main}>
        <div className={Style.col__logo}>logo</div>
        <div className={Style.col__menu}>
          <Link to="" className={Style.menu__item}>
            Home
          </Link>
          <Link to="ticket" className={Style.menu__item}>
            Ticket
          </Link>
          <Link to="/line-up" className={Style.menu__item}>
            Line Up
          </Link>
          <Link to="/schedule" className={Style.menu__item}>
            Schedule
          </Link>
          <Link to="/map" className={Style.menu__item}>
            Map
          </Link>
          <Link to="merch" className={Style.menu__item}>
            Merch
          </Link>
          <Link to="be-part-of-us" className={Style.menu__item}>
            Be Part of Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
