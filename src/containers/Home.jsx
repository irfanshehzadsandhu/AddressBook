import React from "react";
import { connect } from "react-redux";
import {
  fetchUsers,
  fetchingUsersBegin,
  displayModal,
  hideModal,
} from "../redux/actions/usersAction";
import User from "../components/User.jsx";
import UserModal from "../components/Modal.jsx";

class Home extends React.Component {
  constructor() {
    super();
    this.page = 1;
    this.offset = 30;
    this.streetNumber = "";
    this.streetName = "";
    this.city = "";
    this.userAddressState = "";
    this.country = "";
    this.postCode = "";
    this.handleScroll = this.handleScroll.bind(this);
    this.openModal = this.openModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.getStreetNumber = this.getStreetNumber.bind(this);
    this.getStreetName = this.getStreetNumber.bind(this);
    this.getCity = this.getCity.bind(this);
    this.getUserAddressState = this.getUserAddressState.bind(this);
    this.getCountry = this.getCountry.bind(this);
    this.getPostCode = this.getPostCode.bind(this);
  }
  getStreetNumber() {
    return this.streetNumber;
  }

  getStreetName() {
    return this.streetName;
  }

  getCity() {
    return this.city;
  }

  getUserAddressState() {
    return this.userAddressState;
  }

  getCountry() {
    return this.country;
  }

  getPostCode() {
    return this.postCode;
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

  openModal(e) {
    let parentNode = e.target.parentNode.parentNode;
    this.streetNumber = parentNode.getAttribute("data-street-number");
    this.streetName = parentNode.getAttribute("data-street-name");
    this.city = parentNode.getAttribute("data-city");
    this.userAddressState = parentNode.getAttribute("data-state");
    this.country = parentNode.getAttribute("data-country");
    this.postCode = parentNode.getAttribute("data-postcode");
    this.props.displayModal();
  }

  hideModal() {
    this.props.hideModal();
  }

  componentDidMount() {
    this.props.fetchingUsersBegin();
    this.props.fetchUsers(
      this.getPage(),
      this.getOffset(),
      this.props.nationality
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
      const { loading, fetchUsers } = this.props;
      if (loading == false) {
        fetchUsers(this.setPage(), this.getOffset(), this.props.nationality);
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
        <UserModal
          show={this.props.allowModalToDisplay}
          onHide={this.hideModal}
          streetNumber={this.getStreetNumber()}
          streetName={this.getStreetName()}
          city={this.getCity()}
          userAddressState={this.getUserAddressState()}
          country={this.getCountry()}
          postCode={this.getPostCode()}
        />
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
                <User key={index} user={user} openModal={this.openModal} />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapDispatchToProps = {
  fetchUsers,
  fetchingUsersBegin,
  displayModal,
  hideModal,
};
function mapStateToProps(state) {
  return {
    usersList: state.users.usersList,
    loading: state.users.loading,
    error: state.users.error,
    nationality: state.users.nationality,
    allowModalToDisplay: state.users.allowModalToDisplay,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
