import React from "react";
import { connect } from "react-redux";
import { fetchUsers, fetchingUsersBegin } from "./actions/usersAction";
import User from "./components/User.js";

class App extends React.Component {
  constructor() {
    super();
    this.page = 1;
    this.offset = 30;
    this.handleScroll = this.handleScroll.bind(this);
  }

  getPage() {
    return this.page;
  }
  getOffset() {
    return this.offset;
  }

  setPage() {
    return (this.page = this.page + 1);
  }
  componentDidMount() {
    this.props.dispatch(fetchingUsersBegin());
    this.props.dispatch(fetchUsers(this.getPage(), this.getOffset()));
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      const { loading, dispatch } = this.props;
      if (loading == false) {
        console.log(loading);
        dispatch(fetchUsers(this.setPage(), this.getOffset()));
      }
    } else {
      console.log("Reaching bottom");
    }
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
          {usersList.map((user, index) => {
            return <User key={index} user={user} />;
          })}
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
