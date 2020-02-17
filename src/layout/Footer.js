import React, { Fragment } from "react"
import { Link } from "gatsby"
import logo from "../assets/images/logo/logoWhite.png"

const Footer = () => (
  <Fragment>
    <footer className="footer-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="text-center">
            <img
              src={logo}
              alt=""
              style={{ maxWidth: "110px" }}
              className="pb-2"
            />
            <p>
              Copyright @ 2Taps Winebar. All rights reserved{" "}
              {new Date().getFullYear()}.
            </p>
            <p style={{ marginTop: "20px" }}>
              Built by{" "}
              <a
                href="https://pcollins.tech"
                target="__blank"
                style={{ color: "#FDAE39" }}
              >
                Phil Collins
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  </Fragment>
)
export default Footer
