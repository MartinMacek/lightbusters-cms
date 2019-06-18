import React from "react";
// import { Link, } from "gatsby";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
//import logo from "../img/logo_2.png";
//import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import vimeo from "../img/social/vimeo.svg";
import ribbon from "../img/ribbon.png";

export const IndexPageTemplate = () => (
  <Layout>
    <div className="landing">
      <Navbar className="container" />
      <div className="ribbon-container">
        <a
          title="vimeo"
          href="https://vimeo.com/user10901553"
          target="_blank"
          rel="noopener noreferrer"
          className="vimeo-ribbon"
        >
          <img
            src={vimeo}
            alt="Vimeo"
            style={{
              height: "15px",
              top: "2px",
              position: "relative",
              filter: "invert(100%)"
            }}
          />{" "}
          Vimeo
        </a>
        <img src={ribbon} alt="ribbon" className="ribbon-img" />
        <a
          title="vimeo"
          href="https://www.instagram.com/lightbusters/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-ribbon"
        >
          <img
            src={instagram}
            alt="insta"
            style={{
              position: "relative",
              height: "15px",
              top: "2px",
              filter: "invert(100%)"
            }}
          />{" "}
          Instagram
        </a>
      </div>
      {/*<img src={logo} alt="lightbusters" className="center home-image" />*/}
      {/*<div className="bottom-bar">
              <div className="section">
                <div className="container">
                  <div className="columns">
                    <div className="column is-10">
                      <span>
                        <b>Videoproduction company</b>
                      </span>
                    </div>
                    <div className="column is-2">
                      <span
                        style={{
                          justifyContent: "space-between",
                          display: "flex"
                        }}
                      >
                        <a
                          title="facebook"
                          href="https://www.facebook.com/LightBusters.ol/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src={facebook} alt="Facebook" className="soc-icon" />
                        </a>
                        <a
                          title="instagram"
                          href="https://www.instagram.com/lightbusters/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src={instagram} alt="Instagram" className="soc-icon" />
                        </a>
                        <a
                          title="vimeo"
                          href="https://vimeo.com/user10901553"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src={vimeo} alt="Vimeo" className="soc-icon" />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>*/}
    </div>
  </Layout>
);

const IndexPage = () => {
  return <IndexPageTemplate />;
};

export default IndexPage;
