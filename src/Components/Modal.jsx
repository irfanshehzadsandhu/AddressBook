import React from "react";

export default class UserModal extends React.Component {
  render() {
    return (
      <>
        <Modal
          show={this.props.show}
          onHide={this.props.onHide}
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-sm">Street Number: </div>
              <div className="col-sm">{this.props.streetNumber}</div>
            </div>
            <div className="row">
              <div className="col-sm">Street Name: </div>
              <div className="col-sm">{this.props.streetName}</div>
            </div>
            <div className="row">
              <div className="col-sm">City: </div>
              <div className="col-sm">{this.props.city}</div>
            </div>
            <div className="row">
              <div className="col-sm">State: </div>
              <div className="col-sm">{this.props.userAddressState}</div>
            </div>
            <div className="row">
              <div className="col-sm">Country: </div>
              <div className="col-sm">{this.props.country}</div>
            </div>
            <div className="row">
              <div className="col-sm">Postcode: </div>
              <div className="col-sm">{this.props.postCode}</div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.onHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
