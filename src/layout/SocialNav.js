import React, { Fragment } from "react"
import { FaInstagram, FaFacebook } from "react-icons/fa"
const SocialNav = () => {
  return (
    <Fragment>
      <div className="icon-bar">
        <a
          href="https://www.facebook.com/2tapswinebar"
          target="__blank"
          className="facebook"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/2tapswinebar"
          target="__blank"
          className="instagram_nav"
        >
          <FaInstagram />
        </a>
      </div>
    </Fragment>
  )
}

export default SocialNav
