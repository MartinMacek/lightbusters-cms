import React from "react";
// import { Link, } from "gatsby";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
//import logo from "../img/logo_2.png";

export const IndexPageTemplate = () => (
  <Layout>
    <div className="landing">
      <Navbar className="container" />
      {/*<img src={logo} alt="lightbusters" className="center home-image" />*/}
      <div className="container"><b>Videoproduction</b></div>
    </div>
  </Layout>
);

const IndexPage = () => {
  return <IndexPageTemplate />;
};

export default IndexPage;
