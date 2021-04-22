import React, { Fragment } from "react"
import { Container } from "react-bootstrap"
import { Link } from "gatsby"

//Styles
import "animate.css/animate.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "../assets/sass/app.scss"

import ReservationContext from "../context/ReservationContext"

//Components
import Footer from "./Footer"
import SocialNav from "./SocialNav"
import PermanentNav from "./PermanentNav"
import SpecialsMenu from "./SpecialMenu"

const Layout = ({ props, children }) => {
  return (
    <ReservationContext.Consumer>
      {toggler => (
        <div className="">
          {/* <SpecialsMenu /> */}
          <PermanentNav open={toggler.open} />
          <SocialNav />
          <div className="content-wrap">
            {children}
          </div>
          <Footer />
            {/* <Container className="fixed bottom-0">
              <div className="d-flex justify-content-center" >

                <Link to="/menus">
                  <div className="">
                    <div className="text">Menu</div>
                  </div>
                </Link>
                <div 
                    onClick={() => toggler.toggleReservationTab()}
                  className=" "
                >
                  Book
                </div>
                <div 
                  onClick={() => toggler.contactTab()}
                  className=" "
                >
                  Contact
                </div>

              </div>

            </Container> */}
        </div>
      )}
    </ReservationContext.Consumer>
  )
}

export default Layout
