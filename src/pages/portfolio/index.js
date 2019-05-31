import React from "react";
import PortfolioRoll from "../../components/PortfolioRoll";
import Navbar from "../../components/Navbar";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <div className="page">
        <Navbar />
        <div className="container">Portfolio page</div>
        <PortfolioRoll />
      </div>
    );
  }
}
