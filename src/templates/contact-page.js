import React from "react"
import Navbar from "../components/Navbar"
import Layout from "../components/Layout"
//import facebook from "../../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg"
import vimeo from "../img/social/vimeo.svg"
import ribbon from "../img/ribbon.png"

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Navbar />
        <div className="ribbon-container">
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
                filter: "invert(100%)",
              }}
            />{" "}
            Instagram
          </a>
          <img src={ribbon} alt="ribbon" className="ribbon-img" />
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
                filter: "invert(100%)",
              }}
            />{" "}
            Vimeo
          </a>
        </div>
        <div className="content content-contact container">
          <div className="contact-box">
            {/*<h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                              Kontakt
                            </h1>*/}
            <h1
              style={{ marginBottom: "2rem" }}
              className="main-color is-size-3"
            >
              <b>Lukáš </b>
              <b>Vojáček</b>
            </h1>

            <div className="contact-content">
              <div>
                <b className="contact-header">Telefon</b>
                <p>+420 773 900 045</p>
              </div>
              <div>
                <b className="contact-header">Email</b>
                <a
                  href="mailto:vojacek@lightbusters.cz"
                  style={{ display: "block", color: "inherit" }}
                >
                  vojacek@lightbusters.cz
                </a>
              </div>
              <div className="contact-socs">
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
              </div>
            </div>
          </div>
        </div>
        <footer className={"contact-footer"}>
          <div className={"container"}>
            LightBusters s.r.o. <span>|</span> IČO: 08772649 <span>|</span>{" "}
            Sídlo: Ladova 329/25, Hejčín, 779 00 Olomouc
            <br />
            Společnost je zapsána v Obchodním rejstříku, vedeném Krajským soudem
            v Ostravě, oddíl C,vložka 80767.
          </div>
        </footer>
      </Layout>
    )
  }
}
