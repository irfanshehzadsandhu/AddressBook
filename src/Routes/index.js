import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "../Components/Common/Layout";

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Layout />
        </Switch>
      </Router>
    );
  }
}
