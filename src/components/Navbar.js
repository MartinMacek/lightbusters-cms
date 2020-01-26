import React from "react"
// import { Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink"

import logo from "../img/logo_2.png"

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: "",
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            })
      }
    )
  }

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
                title="LightBusters"
                fade
                duration={1}
              >
                <img src={logo} alt="LightBusters" style={{ width: "145px" }} />
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
            <div
              className="navbar-end"
              style={{ textAlign: "right", marginRight: "1em" }}
            >
              <AniLink
                to="/portfolio"
                fade
                duration={1}
                className="navbar-item"
              >
                <span className="navbar-text">Portfolio</span>
              </AniLink>
              <AniLink
                id="contact-item"
                className="navbar-item"
                to="/contact"
                fade
                duration={1}
                style={{ marginLeft: "2rem" }}
              >
                <span className="navbar-text">Kontakt</span>
              </AniLink>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
