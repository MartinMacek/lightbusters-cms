import React from "react";
// import { Link, } from "gatsby";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import logo from "../img/logo_2.png";

export const IndexPageTemplate = () => (
  <Layout>
    <div className="landing">
      <Navbar no_logo className="container" />
      <img src={logo} alt="lightbusters" className="center home-image" />
    </div>
  </Layout>
);

const IndexPage = () => {
  return <IndexPageTemplate />;
};

export default IndexPage;
