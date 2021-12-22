import React from "react";
import { Helmet } from "react-helmet";
import Style from "./Map.module.scss";

const Map = (props) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Map</title>
        <meta name="description" content="Map" />
        <meta name="theme-color" content="#E6E6FA" />
      </Helmet>
      <div className={Style.lineUp__wrapper}>
        <div className={Style.lineUp__mainText}>Map</div>
        <div className={Style.lineUp__container}>
          <div className={Style.lineUp__containerItem}>
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;
