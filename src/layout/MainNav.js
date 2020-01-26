import React, { Component } from "react"
import { Link } from "gatsby"
import { Navbar, Nav, Container, Row } from "react-bootstrap"
import logo from "../assets/images/logo/logo.png"
import SideNav from "./SideNav"

class NavBar extends Component {
  componentDidMount() {
    let elem = document.getElementById("navbar")
    // if (this.props.router.location.pathname === "/") {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elem.classList.add("is-sticky")
      } else {
        elem.classList.remove("is-sticky")
      }
    })
    let scrollWithOffset = (el, offset) => {
      const elementPosition = el.offsetTop - offset
      window.scroll({
        top: elementPosition,
        left: 0,
        behavior: "smooth",
      })
    }
    this.setState({ scrollWithOffset })
  }

  closeNavbar() {
    if (window.matchMedia("screen and (max-width: 991px)").matches) {
      document.getElementById("collaspe-btn").click()
    }
  }
  render() {
    return (
      <div className="nav-wrapper">
        <Container>
          <Row>
            <Navbar
              sticky="top"
              id="navbar"
              expand="lg"
              className="navbar navbar-expand-lg "
              collapseOnSelect={true}
            >
              <Navbar.Brand>
                <Link to="/">
                  <img src={logo} alt="logo" style={{ maxWidth: "150px" }} />
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                id="collaspe-btn"
              />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Item>
                    <Link
                      to="/"
                      className="nav-link"
                      onClick={this.closeNavbar}
                      activeClassName="active"
                    >
                      Home
                    </Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link
                      to="/about"
                      className="nav-link"
                      onClick={this.closeNavbar}
                      activeClassName="active"
                    >
                      About
                    </Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link
                      to="/menus"
                      className="nav-link"
                      onClick={this.closeNavbar}
                      activeClassName="active"
                    >
                      Menus
                    </Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link
                      to="/reservations"
                      className="nav-link"
                      onClick={this.closeNavbar}
                      activeClassName="active"
                    >
                      Reservations
                    </Link>
                  </Nav.Item>

                  <Nav.Item>
                    {/* SideNav: src/components/SideNav */}
                    <SideNav />
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Row>
        </Container>
      </div>
    )
  }
}

export default NavBar
