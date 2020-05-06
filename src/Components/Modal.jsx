import React from "react";
import { Modal, Row, Col } from "antd";

export default class UserModal extends React.Component {
  render() {
    return (
      <div>
        <Modal
          title="Basic Modal"
          visible={true}
          onCancel={this.props.unSelectUser}
          onOk={this.props.unSelectUser}
        >
          <Row>
            <Col span={6}>
              {this.props.user.location.street.number +
                "," +
                this.props.user.location.street.name}
            </Col>
            <Col span={6}>{this.props.user.location.city}</Col>
            <Col span={6}>{this.props.user.location.state}</Col>
            <Col span={6}>{this.props.user.location.postcode}</Col>
          </Row>
        </Modal>
      </div>
    );
  }
}
