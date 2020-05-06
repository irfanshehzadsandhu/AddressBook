import React from "react";
import { connect } from "react-redux";
import "../../assets/stylesheets/Home.css";
import {
  fetchUsers,
  fetchingUsersBegin,
  selectUser,
  unSelectUser,
} from "../Redux/Actions/usersAction";
import User from "../Components/User.jsx";
import UserModal from "../Components/Modal.jsx";

class Home extends React.Component {
  getUsers() {
    const { paginationInfo, nationality } = this.props;
    if (paginationInfo.hasNextPage) {
      this.props.fetchUsers(
        paginationInfo.nextPage,
        paginationInfo.perPage,
        nationality
      );
    }
  }
  componentDidMount() {
    this.props.fetchingUsersBegin();
    this.getUsers();
    this.handleScrollToBottom();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScrollToBottom() {
    const { paginationInfo, loading } = this.props;
    window.onscroll = async () => {
      if (loading || !paginationInfo.hasNextPage) return;
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.scrollHeight
      ) {
        console.log("loading more data");
        this.getUsers();
      }
    };
  }

  render() {
    const {
      error,
      loading,
      usersList,
      paginationInfo,
      selectUser,
      unSelectUser,
      selectedUser,
    } = this.props;
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
        {selectedUser !== null ? (
          <UserModal user={selectedUser} unSelectUser={unSelectUser} />
        ) : null}

        {usersList.map((user, index) => {
          return <User key={index} user={user} onClick={selectUser} />;
        })}
        {paginationInfo.hasNextPage == false ? <div>No more users</div> : null}
      </>
    );
  }
}
const mapDispatchToProps = {
  fetchUsers,
  fetchingUsersBegin,
  selectUser,
  unSelectUser,
};
function mapStateToProps(state) {
  return {
    usersList: state.users.usersList,
    loading: state.users.loading,
    error: state.users.error,
    nationality: state.users.nationality,
    selectedUser: state.users.selectedUser,
    paginationInfo: state.users.paginationInfo,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
