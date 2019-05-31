import React from "react";
import { Link } from "gatsby";

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
              <Link to="/" className="navbar-item" title="Logo">
                <img src={logo} alt="Kaldi" style={{ width: "145px" }} />
              </Link>
            )}

            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
              style={{ marginRight: "20px" }}
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
              <Link className="navbar-item" to="/portfolio">
                Portfolio
              </Link>
              <Link
                id="contact-item"
                className="navbar-item"
                to="/contact"
                style={{ marginLeft: "3rem" }}
              >
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
