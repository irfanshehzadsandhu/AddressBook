import React from "react";
import { connect } from "react-redux";
import { setNationality } from "../redux/actions/usersAction";

class Settings extends React.Component {
  constructor() {
    super();
    this.configureNationality = this.configureNationality.bind(this);
  }

  configureNationality(e) {
    this.props.setNationality(e.target.getAttribute("data-nationality"));
  }
  render() {
    return (
      <div className="btn-group" role="group" aria-label="Basic example">
        <button
          type="button"
          className={
            this.props.nationality == "us" ? "btn btn-primary" : "btn btn-light"
          }
          data-nationality="us"
          onClick={this.configureNationality}
        >
          United States
        </button>
        <button
          type="button"
          className={
            this.props.nationality == "ch" ? "btn btn-primary" : "btn btn-light"
          }
          data-nationality="ch"
          onClick={this.configureNationality}
        >
          Switzerland
        </button>
        <button
          type="button"
          className={
            this.props.nationality == "fr" ? "btn btn-primary" : "btn btn-light"
          }
          data-nationality="fr"
          onClick={this.configureNationality}
        >
          FRANCE
        </button>
      </div>
    );
  }
}
const mapDispatchToProps = {
  setNationality,
};
function mapStateToProps(state) {
  return {
    nationality: state.users.nationality,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Settings);
