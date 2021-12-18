import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Style from "./Base.module.scss";

const Base = (props) => (
  <>
    <Header />
    <div className={Style.wrapper}>
      <section className="section-container">{props.children}</section>
    </div>
    <Footer />
  </>
);
export default Base;
