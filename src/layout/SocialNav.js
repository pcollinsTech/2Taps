import React, { Fragment } from "react"
import { FaInstagram, FaFacebook } from "react-icons/fa"
const SocialNav = () => {
  return (
    <Fragment>
      <div class="icon-bar">
        <a
          href="https://www.facebook.com/2tapswinebar"
          target="__blank"
          class="facebook"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/2tapswinebar"
          target="__blank"
          class="instagram"
        >
          <FaInstagram />
        </a>
      </div>
    </Fragment>
  )
}

export default SocialNav
