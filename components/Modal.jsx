import React from "react";

export default class Modal extends React.Component {
  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="userDetailsModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="userDetailsModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="userDetailsModalLabel">
                  Details
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-sm">Street Number: </div>
                  <div className="col-sm" id="street-number"></div>
                </div>
                <div className="row">
                  <div className="col-sm">Street Name: </div>
                  <div className="col-sm" id="street-name"></div>
                </div>
                <div className="row">
                  <div className="col-sm">City: </div>
                  <div className="col-sm" id="city"></div>
                </div>
                <div className="row">
                  <div className="col-sm">State: </div>
                  <div className="col-sm" id="state"></div>
                </div>
                <div className="row">
                  <div className="col-sm">Country: </div>
                  <div className="col-sm" id="country"></div>
                </div>
                <div className="row">
                  <div className="col-sm">Postcode: </div>
                  <div className="col-sm" id="postcode"></div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
