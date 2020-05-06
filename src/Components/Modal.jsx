import React from "react";
import { Modal, Row, Col } from "antd";
import PropTypes from 'prop-types';
import User from "../Entities/user.js"
export default class UserModal extends React.Component {
  render() {
    return (
      <div>
        <Modal
          title="Postal Address"
          visible={true}
          onCancel={this.props.unSelectUser}
          onOk={this.props.unSelectUser}
        >
          <Row>
            <Col span={12}>
              <p>{this.props.user.location.address()}</p>
            </Col>
          </Row>
        </Modal>
      </div>
    );
  }
}
UserModal.propTypes = {
  user: PropTypes.instanceOf(User).isRequired,
  unSelectUser: PropTypes.func.isRequired,
}