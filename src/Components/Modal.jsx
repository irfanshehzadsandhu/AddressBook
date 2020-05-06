import React from "react";
import { Modal, Row, Col } from "antd";

export default class UserModal extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Modal
          title="Basic Modal"
          visible={true}
          onCancel={this.props.unSelectUser}
          onOk={this.props.unSelectUser}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}
