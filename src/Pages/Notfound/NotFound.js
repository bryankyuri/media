import React from "react";
import Style from "./notfound.module.scss";

const NotFound = (props) => (
  <div className={Style.contentWrapper}>
    <div className="abs-center wd-xl">
      <div className="text-left">
        <div className={Style.logoHeader}>
          <img className="img-fluid" src="logo512.png" alt="App Logo" />
          
        </div>
        <span className="text-sm ml-1">DISTRIBUTION SYSTEM</span>
        <div className="display-1">404</div>
        <p className="lead m-0">We couldn't find this page.</p>
        <p className="mb-3">The page you are looking for does not exists.</p>
            
        <button onClick={() => {window.history.back()}}>
          <span
            className="fa fa-arrow-left"
          />
          &nbsp;&nbsp;&nbsp;&nbsp;Go Back
        </button>
      </div>
    </div>
  </div>
);

export default NotFound;
