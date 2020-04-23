import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "./actions/usersAction";
import User from "./components/User.js";
class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchUsers());
  }
  render() {
    const { error, loading, usersList } = this.props;
    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return (
        <div style={{ marginTop: 300, marginLeft: 700 }}>
          <img src="../assets/images/tenor.gif" />
        </div>
      );
    }
    return (
      <table className="table">
        <thead>
          <tr>
            <th></th>
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
function mapStateToProps(state) {
  return {
    usersList: state.users.usersList,
    loading: state.users.loading,
    error: state.users.error,
  };
}
export default connect(mapStateToProps)(App);
