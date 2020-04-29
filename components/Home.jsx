import $ from "jquery";
import React from "react";
import { connect } from "react-redux";
import { fetchUsers, fetchingUsersBegin } from "../actions/usersAction";
import User from "./User.jsx";
import Modal from "./Modal.jsx";

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

  openModel(e) {
    let parentNode = e.target.parentNode.parentNode;
    $("#street-number").html(parentNode.getAttribute("data-street-number"));
    $("#street-name").html(parentNode.getAttribute("data-street-name"));
    $("#city").html(parentNode.getAttribute("data-city"));
    $("#state").html(parentNode.getAttribute("data-state"));
    $("#country").html(parentNode.getAttribute("data-country"));
    $("#postcode").html(parentNode.getAttribute("data-postcode"));
    $("#userDetailsModal").modal("show");
  }

  componentDidMount() {
    this.props.dispatch(fetchingUsersBegin());
    this.props.dispatch(
      fetchUsers(this.getPage(), this.getOffset(), this.props.nationality)
    );
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
        dispatch(
          fetchUsers(this.setPage(), this.getOffset(), this.props.nationality)
        );
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
      <div>
        <Modal />
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {usersList.map((user, index) => {
              return (
                <User key={index} user={user} openModel={this.openModel} />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    usersList: state.users.usersList,
    loading: state.users.loading,
    error: state.users.error,
    nationality: state.users.nationality,
  };
}
export default connect(mapStateToProps)(App);
