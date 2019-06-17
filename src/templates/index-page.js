import React from "react";
// import { Link, } from "gatsby";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
//import logo from "../img/logo_2.png";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import vimeo from "../img/social/vimeo.svg";

export const IndexPageTemplate = () => (
  <Layout>
    <div className="landing">
      <Navbar className="container" />
      {/*<img src={logo} alt="lightbusters" className="center home-image" />*/}
      <div className="bottom-bar">
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
                  >
                    <img src={facebook} alt="Facebook" className="soc-icon" />
                  </a>
                  <a
                    title="instagram"
                    href="https://www.instagram.com/lightbusters/"
                  >
                    <img src={instagram} alt="Instagram" className="soc-icon" />
                  </a>
                  <a title="vimeo" href="https://vimeo.com/user10901553">
                    <img src={vimeo} alt="Vimeo" className="soc-icon" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

const IndexPage = () => {
  return <IndexPageTemplate />;
};

export default IndexPage;
