import React, { Fragment } from "react"
import { FaInstagram, FaFacebook } from "react-icons/fa"
import logo from "../assets/images/logo/logoWhite.png"

const Footer = () => (
  <Fragment>
    <footer className="footer-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-5">
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
          <div className="col-sm-2">
            <h5>Site Map</h5>
            <ul>
              <li>About</li>
              <li>Menu</li>
              <li>Contact</li>
              <li></li>
            </ul>
          </div>
          <div className="col-sm-2">
            <h5>Legal</h5>
            <ul>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="col-sm-3">
            <h5>Let's Connect</h5>
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/2tapswinebar/"
                  target="__blank"
                >
                  <FaInstagram /> - Instagram
                </a>
              </li>

              <li>
                <a
                  href="https://www.facebook.com/2tapswinebar/"
                  target="__blank"
                >
                  <FaFacebook /> - Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </Fragment>
)
export default Footer
