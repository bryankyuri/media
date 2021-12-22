import React from "react";
import { Helmet } from "react-helmet";
import Style from "./BePartOfUs.module.scss";

const BePartOfUs = (props) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>BePartOfUs</title>
        <meta name="description" content="BePartOfUs" />
        <meta name="theme-color" content="#E6E6FA" />
      </Helmet>
      <div className={Style.lineUp__wrapper}>
        <div className={Style.lineUp__mainText}>Be Part Of Us</div>
        <div className={Style.lineUp__container}>
          <div className={Style.lineUp__containerItem}>
          </div>
        </div>
      </div>
    </>
  );
};

export default BePartOfUs;
