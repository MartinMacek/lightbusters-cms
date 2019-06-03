import React from "react";
import PortfolioRoll from "../../components/PortfolioRoll";
import Navbar from "../../components/Navbar";
import Layout from "../../components/Layout";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Navbar />
        <div className="container" style={{ paddingBottom: "3rem" }}>
          <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
            Naše portfolio
          </h1>
          <p>
            Specializujeme se na komplexní reklamu firem a organizací, kterým
            pomáháme zlepšovat efektivitu prodeje a úspěšnosti reklam.
          </p>
        </div>
        <PortfolioRoll />
      </Layout>
    );
  }
}
