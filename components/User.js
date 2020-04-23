import React from "react";

export default class User extends React.Component {
  render() {
    return (
      <tr>
        <th>{this.props.user.name.first}</th>
        <th>{this.props.user.name.last}</th>
        <th>{this.props.user.email}</th>
      </tr>
    );
  }
}
