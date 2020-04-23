import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "./actions/actions";
import User from "./components/User.js";
class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchUsers());
  }
  render() {
    const { usersList } = this.props;
    console.log("^^^^^^^^^^^^^^^^^^^^^^", usersList);
    return (
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {usersList.map((user, i) => (
            <User key={i} user={user} />
          ))}
        </tbody>
      </table>
    );
  }
}
function select(state) {
  return {
    usersList: state.userReducer.usersList,
  };
}
export default connect(select)(App);
