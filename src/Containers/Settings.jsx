import React from "react";
import { connect } from "react-redux";
import { Select } from "antd";
const { Option } = Select;
import { setNationality } from "../Redux/Actions/usersAction";

class Settings extends React.Component {
  constructor() {
    super();
    this.configureNationality = this.configureNationality.bind(this);
  }
  configureNationality(value) {
    this.props.setNationality(value);
  }
  render() {
    return (
      <>
        <Select
          defaultValue={this.props.nationality}
          style={{ width: 120 }}
          onChange={this.configureNationality}
        >
          <Option value="us">United States</Option>
          <Option value="ch">Switzerland</Option>
          <Option value="fr">France</Option>
        </Select>
      </>
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
