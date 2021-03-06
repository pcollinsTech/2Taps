import React, { Component } from "react"
import { Navbar, Container, Row } from "react-bootstrap"

class NavBar extends Component {
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
            >
              {/* <Navbar.Brand>
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </Navbar.Brand> */}
              {/* <Navbar.Toggle
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
                      to="/menus/"
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
                    SideNav: src/components/SideNav
                    <SideNav />
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse> */} 
            </Navbar>
          </Row>
        </Container>
      </div>
    )
  }
}

export default NavBar
