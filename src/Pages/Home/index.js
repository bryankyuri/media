import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class index extends Component {
  render() {
    return (
      <div>
        <Link to="/maintenance">Maintenance</Link>
      </div>
    );
  }
}
