import React from "react";
import { Row, Col } from "antd";
export default class User extends React.Component {
  render() {
    return (
      <>
        <Row>
          <Col span={6}>
            <img src={this.props.user.picture.large} />
          </Col>
          <Col span={6}>
            {this.props.user.name.first + " " + this.props.user.name.last}
          </Col>
          <Col span={6}>{this.props.user.email}</Col>
          <Col span={6}>Details</Col>
        </Row>
      </>
    );
  }
}
