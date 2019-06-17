import React from "react";
import Navbar from "../../components/Navbar";
import Layout from "../../components/Layout";
import facebook from "../../img/social/facebook.svg";
import instagram from "../../img/social/instagram.svg";
import vimeo from "../../img/social/vimeo.svg";

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Navbar />
        <span>
          <div className="content">
            <div className="contact-box center">
              {/*<h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                              Kontakt
                            </h1>*/}
              <h1 style={{ marginBottom: "2rem" }}>
                <b className="gradient-text">Lukáš Vojáček</b>
              </h1>

              <div className="contact-content">
                <div>
                  <b className="contact-header">Telefon</b>
                  <p>+420 773 900 045</p>
                </div>
                <div>
                  <b className="contact-header">Email</b>
                  <p>vojacek@lightbusters.cz</p>
                </div>
                <div>
                  <b className="contact-header">Ič</b>
                  <p>00909581</p>
                </div>
                <span
                  style={{
                    "justify-content": "space-between",
                    display: "flex",
                    "margin-top": "2rem"
                  }}
                >
                  <a
                    title="facebook"
                    href="https://www.facebook.com/LightBusters.ol/"
                  >
                    <img src={facebook} alt="Facebook" class="soc-icon" />
                  </a>
                  <a
                    title="instagram"
                    href="https://www.instagram.com/lightbusters/"
                  >
                    <img src={instagram} alt="Instagram" class="soc-icon" />
                  </a>
                  <a title="vimeo" href="https://vimeo.com/user10901553">
                    <img src={vimeo} alt="Vimeo" class="soc-icon" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </span>
      </Layout>
    );
  }
}
