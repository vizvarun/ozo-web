import React, { Component } from "react";
import "antd/dist/antd.css";
import { Tabs } from "antd";
import Stay from "./stay";
import Eat from "./eat";
import Earn from "./earn";
import "./tabs.css";
import { AppleOutlined, AndroidOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export default class Tab extends Component {
  render() {
    return (
      <div className="tabs">
        <div align="center">
          <Tabs onChange={callback} type="card" defaultActiveKey="stay" >
            <TabPane tab="Stay" key="stay">
              <Stay />
            </TabPane>
            <TabPane tab="Eat" key="eat">
              <Eat />
            </TabPane>
            <TabPane tab="Earn" key="earn">
              <Earn />
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}
