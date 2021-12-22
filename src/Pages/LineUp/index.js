import React from "react";
import { Helmet } from "react-helmet";
import Style from "./LineUp.module.scss";

const LineUp = (props) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Line Up</title>
        <meta name="description" content="Line Up" />
        <meta name="theme-color" content="#E6E6FA" />
      </Helmet>
      <div className={Style.lineUp__wrapper}>
        <div className={Style.lineUp__mainText}>Line Up</div>
        <div className={Style.lineUp__container}>
          <div className={Style.lineUp__containerItem}>
            <div className={Style.lineUp__item}></div>
            <div className={Style.lineUp__item}></div>
            <div className={Style.lineUp__item}></div>
            <div className={Style.lineUp__item}></div>
            <div className={Style.lineUp__item}></div>
            <div className={Style.lineUp__item}></div>
            <div className={Style.lineUp__item}></div>
            <div className={Style.lineUp__item}></div>
            <div className={Style.lineUp__item}></div>
            <div className={Style.lineUp__item}></div>
            <div className={Style.lineUp__item}></div>
            <div className={Style.lineUp__item}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LineUp;
