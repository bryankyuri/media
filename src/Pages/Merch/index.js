import React from "react";
import { Helmet } from "react-helmet";
import Style from "./Merch.module.scss";

const Merch = (props) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Merch</title>
        <meta name="description" content="Merch" />
        <meta name="theme-color" content="#E6E6FA" />
      </Helmet>
      <div className={Style.lineUp__wrapper}>
        <div className={Style.lineUp__mainText}>Merch</div>
        <div className={Style.lineUp__container}>
          <div className={Style.lineUp__containerItem}>
          </div>
        </div>
      </div>
    </>
  );
};

export default Merch;
