import React from "react";
import { Helmet } from "react-helmet";
import Style from "./Ticket.module.scss";

const Ticket = (props) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Ticket</title>
        <meta name="description" content="Ticket" />
        <meta name="theme-color" content="#E6E6FA" />
      </Helmet>
      <div className={Style.lineUp__wrapper}>
        <div className={Style.lineUp__mainText}>Ticket</div>
        <div className={Style.lineUp__container}>
          <div className={Style.lineUp__containerItem}>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ticket;
