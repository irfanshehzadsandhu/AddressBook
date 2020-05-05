import React from "react";
import { EyeFill } from "react-bootstrap-icons";
export default class User extends React.Component {
  render() {
    return (
      <tr>
        <th>
          <img src={this.props.user.picture.large} />
        </th>
        <th>{this.props.user.name.first}</th>
        <th>{this.props.user.name.last}</th>
        <th>{this.props.user.email}</th>
        <th>
          <a
            href="##"
            data-street-number={this.props.user.location.street.number}
            data-street-name={this.props.user.location.street.name}
            data-city={this.props.user.location.city}
            data-state={this.props.user.location.state}
            data-country={this.props.user.location.country}
            data-postcode={this.props.user.location.postcode}
            onClick={this.props.openModal}
          >
            <EyeFill />
          </a>
        </th>
      </tr>
    );
  }
}
