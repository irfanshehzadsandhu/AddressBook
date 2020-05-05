import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../Components/Common/Layout/Navbar.jsx";
import Home from "../Containers/Home.jsx";
import Settings from "../Containers/Settings.jsx";
import { Layout } from "antd";
const { Header, Content } = Layout;

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Layout>
          <Header>
            <Navbar />
          </Header>
          <Switch>
            <Content>
              <div className="site-layout-content">
                <Route path="/" exact component={Home} />
                <Route path="/settings" component={Settings} />
              </div>
            </Content>
          </Switch>
        </Layout>
      </Router>
    );
  }
}
