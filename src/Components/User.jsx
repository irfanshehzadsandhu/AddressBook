import React from "react";
import PropTypes from 'prop-types';
import { Row, Col } from "antd";
import UserEntity from "../Entities/user.js"
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
User.propTypes = {
  user: PropTypes.instanceOf(UserEntity).isRequired,
  onClick: PropTypes.func.isRequired,
}