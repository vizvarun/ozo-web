import React, { Component } from "react";

import "antd/dist/antd.css";
import { Drawer, Button } from "antd";
import {UserOutlined} from "@ant-design/icons"

import logo from "./logo.png";
import "./nav.css";

export default class Navbar extends Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div className="container-fluid navigation">
        <img src={logo} alt="logo" />
        <div className="hidden" onClick={this.showDrawer}>
          <h2>&#9776;</h2>
        </div>
        <div align="center" className="btncontain">
          <Button type="primary" className="buttonlist">
            List your property
          </Button>
        </div>
        <div className="navs">
          <ul>
            <li><UserOutlined />  Login</li>
            <li>
              <Button type="primary" className="signbtn">
                Sign Up
              </Button>
            </li>
            <li id="menu">
              <h2 onClick={this.showDrawer}>&#9776;</h2>
              <Drawer
                placement="right"
                closable={false}
                onClose={this.onClose}
                visible={this.state.visible}
              >
                <h4 className="cross" onClick={this.onClose}>
                  &#215;
                </h4>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </Drawer>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
