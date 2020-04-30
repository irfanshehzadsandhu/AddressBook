import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/common/layout/Navbar.jsx";
import Home from "./containers/Home.jsx";
import Settings from "./containers/Settings.jsx";
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </Router>
    );
  }
}
