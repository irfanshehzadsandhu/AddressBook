import React from "react";

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
      </tr>
    );
  }
}
