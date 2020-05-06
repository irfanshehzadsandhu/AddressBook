import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Home from "../../../Containers/Home.jsx";
import Settings from "../../../Containers/Settings.jsx";
import { Layout } from "antd";
const { Header, Content } = Layout;

export default class CommonLayout extends React.Component {
  render() {
    return (
      <Layout>
        <Header>
          <Navbar />
        </Header>
        <Content>
          <div className="site-layout-content">
            <Route path="/" exact component={Home} />
            <Route path="/settings" component={Settings} />
          </div>
        </Content>
      </Layout>
    );
  }
}
