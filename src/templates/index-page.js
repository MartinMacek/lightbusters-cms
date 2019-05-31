import React from "react";
// import { Link, } from "gatsby";
import Navbar from "../components/Navbar";

export const IndexPageTemplate = () => (
  <div className="landing ">
    <Navbar no_logo className="container" />
    <img
      src="http://lightbusters.cz/images/logo_2.png"
      alt="lightbusters"
      className="center"
    />
  </div>
);

const IndexPage = () => {
  return <IndexPageTemplate />;
};

export default IndexPage;
