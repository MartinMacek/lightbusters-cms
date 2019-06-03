import React from "react";
import Navbar from "../../components/Navbar";
import luke from "../../img/luke.png";
import Layout from "../../components/Layout";

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Navbar />
        <span>
          <div
            className="contact-cover"
            style={{ backgroundImage: "url(" + luke + ")" }}
          />
          <div className="contact-content content">
            <div className="contact-box">
              <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                Kontakt
              </h1>
              <h1 style={{ marginTop: "4rem" }}>
                <b className="gradient-text">Lukáš Vojáček</b>
              </h1>
              <p>+420 773 900 045</p>

              <p>vojacek@lightbusters.cz</p>
            </div>
          </div>
        </span>
      </Layout>
    );
  }
}
