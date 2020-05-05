import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { Row, Col } from "antd";
export default class Navbar extends React.Component {
  render() {
    return (
      <>
        <Row>
          <Col span={6}></Col>
          <Col span={6}></Col>
        </Row>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/" type="link">
              Home
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/settings" type="link">
              Settings
            </Link>
          </Menu.Item>
        </Menu>
      </>
    );
  }
}
