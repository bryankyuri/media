import React from "react";
import { Helmet } from "react-helmet";
import Style from "./Schedule.module.scss";

const Schedule = (props) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Schedule</title>
        <meta name="description" content="Schedule" />
        <meta name="theme-color" content="#E6E6FA" />
      </Helmet>
      <div className={Style.lineUp__wrapper}>
        <div className={Style.lineUp__mainText}>Schedule</div>
        <div className={Style.lineUp__container}>
          <div className={Style.lineUp__containerItem}>
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule;
