import React, { Component } from "react";
import Style from "./Home.module.scss"

import { Link } from "react-router-dom";

export default class index extends Component {
  render() {
    return (
      <>
        <div className={Style.banner}>Test Banner</div>
      </>
    );
  }
}
