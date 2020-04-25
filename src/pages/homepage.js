import React, { Component } from "react";

import Navbar from "../components/navbar";
import Tab from "../components/tabs";

export default class Homepage extends Component {
  render() {
    return (
      <div className="body-wrap boxed-container">
        <Navbar />
      </div>
    );
  }
}
