import React, { Fragment } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import MainNav from "./MainNav"
import Footer from "./Footer"
import "../assets/sass/app.scss"
import SocialNav from "./SocialNav"
import PermanentNav from "./PermanentNav"
const Layout = ({ props, children }) => {
  return (
    <Fragment>
      <MainNav router={props} />
      <PermanentNav />
      <SocialNav />
      <div className="content-wrap">{children}</div>
      <Footer />
    </Fragment>
  )
}

export default Layout
