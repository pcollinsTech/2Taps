import React, { Fragment } from "react"
import { Link } from "gatsby"
import logo from "../assets/images/logo/logoWhite.png"

const Footer = () => (
  <Fragment>
    <footer className="footer-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 pb-3">
            <img
              src={logo}
              alt=""
              style={{ maxWidth: "110px" }}
              className="pb-4"
            />
            <p>
              Copyright @ 2Taps Winebar. All rights reserved{" "}
              {new Date().getFullYear()}.
            </p>
            {/* <p style={{ marginTop: "20px" }}>
              Built by{" "}
              <a href="https://pcollins.tech" target="__blank">
                Phil
              </a>
            </p> */}
          </div>
          {/* <div className="col">
            <h5>Site Map</h5>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/menu">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>Legal</h5>
            <ul>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div> */}
        </div>
      </div>
    </footer>
  </Fragment>
)
export default Footer
