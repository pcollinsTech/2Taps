import React, { Fragment } from "react"

//Styles
import "animate.css/animate.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "../assets/sass/app.scss"

import ReservationContext from "../context/ReservationContext"

//Components
import MainNav from "./MainNav"
import Footer from "./Footer"
import SocialNav from "./SocialNav"
import PermanentNav from "./PermanentNav"

const Layout = ({ props, children }) => {
  return (
    <ReservationContext.Consumer>
      {toggler => (
        <Fragment>
          <MainNav router={props} />
          <PermanentNav open={toggler.open} />
          <SocialNav />
          <div className="content-wrap">{children}</div>
          <Footer />
        </Fragment>
      )}
    </ReservationContext.Consumer>
  )
}

export default Layout
