import React from "react";
import { Row, Col, Icon } from "antd";
export default class User extends React.Component {
  render() {
    return (
      <>
        <Row>
          <Col span={6}>
            <img src={this.props.user.image} />
          </Col>
          <Col span={6}>{this.props.user.fullName()}</Col>
          <Col span={6}>{this.props.user.email}</Col>
          <Col span={6}>
            <a href="##" onClick={() => this.props.onClick(this.props.user)}>
              Details
            </a>
          </Col>
        </Row>
      </>
    );
  }
}
