import React from "react";
import PortfolioRoll from "../../components/PortfolioRoll";
import Navbar from "../../components/Navbar";
import Layout from "../../components/Layout";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Navbar />
        <div className="container">Portfolio page</div>
        <PortfolioRoll />
      </Layout>
    );
  }
}
