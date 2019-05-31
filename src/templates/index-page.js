import React from "react";
// import { Link, } from "gatsby";
import Navbar from "../components/Navbar";
import logo from "../img/logo_2.png";

export const IndexPageTemplate = () => (
  <div className="landing ">
    <Navbar no_logo className="container" />
    <img src={logo} alt="lightbusters" className="center" />
  </div>
);

const IndexPage = () => {
  return <IndexPageTemplate />;
};

export default IndexPage;
