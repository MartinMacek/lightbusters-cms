import React from "react";
// import { Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import logo from "../img/logo_2.png";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar"
        role="navigation"
        aria-label="main-navigation"
        style={{ backgroundColor: "transparent", padding: "3rem 0rem" }}
      >
        <div className="container">
          <div className="navbar-brand">
            {!this.props.no_logo && (
              <AniLink
                to="/"
                className="navbar-item"
                title="Logo"
                fade
                bg="#0a0a0a"
                duration={1}
              >
                <img src={logo} alt="Kaldi" style={{ width: "145px" }} />
              </AniLink>
            )}

            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
              style={{ marginRight: "15px", color: "white" }}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
            style={{ backgroundColor: "transparent" }}
          >
            <div className="navbar-end has-text-centered">
              <AniLink
                className="navbar-item"
                to="/portfolio"
                cover
                bg="#0a0a0a"
                direction="down"
                duration={1}
              >
                <b>Portfolio</b>
              </AniLink>
              <AniLink
                id="contact-item"
                className="navbar-item"
                to="/contact"
                direction="right"
                cover
                bg="-webkit-linear-gradient(45deg, #00f260 0%,#0575e6 100%)"
                duration={1}
                style={{ marginLeft: "2rem" }}
              >
                <b>Kontakt</b>
              </AniLink>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
