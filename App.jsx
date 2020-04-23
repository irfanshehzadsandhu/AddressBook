import React from "react";
import { connect } from "react-redux";

import User from "./components/User.js";
class App extends React.Component {
  render() {
    const { list } = this.props;

    return (
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {list.map((user, i) => (
            <User key={i} user={user} />
          ))}
        </tbody>
      </table>
    );
  }
}
function select(state) {
  return {
    list: state.users.list, //why state.users ?
  };
}
export default connect(select)(App);
