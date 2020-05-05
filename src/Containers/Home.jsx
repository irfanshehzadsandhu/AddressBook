import React from "react";
import { connect } from "react-redux";
import "../../assets/stylesheets/Home.css";
import { Row, Col } from "antd";
import { fetchUsers, fetchingUsersBegin } from "../Redux/Actions/usersAction";
import User from "../Components/User.jsx";
import UserModal from "../Components/Modal.jsx";

class Home extends React.Component {
  getUsers() {
    const { page, offset, nationality } = this.props;
    this.props.fetchingUsersBegin();
    this.props.fetchUsers(page, offset, nationality);
  }
  componentDidMount() {
    this.getUsers();
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
      const { loading, fetchUsers } = this.props;
      if (loading == false) {
        this.getUsers();
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
      <>
        <Row>
          <Col span={6}>Avatar</Col>
          <Col span={6}>Name</Col>
          <Col span={6}>Email</Col>
          <Col span={6}>Details</Col>
        </Row>
        {usersList.map((user, index) => {
          return <User key={index} user={user} />;
        })}
      </>
    );
  }
}
const mapDispatchToProps = {
  fetchUsers,
  fetchingUsersBegin,
};
function mapStateToProps(state) {
  return {
    usersList: state.users.usersList,
    loading: state.users.loading,
    error: state.users.error,
    nationality: state.users.nationality,
    page: state.users.page,
    offset: state.users.offset,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
