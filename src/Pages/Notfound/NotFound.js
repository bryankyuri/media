import React from "react";

const NotFound = (props) => (
  <div>
    404
    <button
      onClick={() => {
        window.history.back();
      }}
    >
      <span className="fa fa-arrow-left" />
      &nbsp;&nbsp;&nbsp;&nbsp;Go Back
    </button>
  </div>
);

export default NotFound;
