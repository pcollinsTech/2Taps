import React, { Fragment } from "react"
import { MdRestaurantMenu, MdAvTimer, MdBookmark, MdHome } from "react-icons/md"
import { Link } from "gatsby"
import SideNav from "./SideNav"
const PermanentNav = () => {
  return (
    <Fragment>
      <div className="permant-bar">
        <Link to="/">
          <MdHome />
          <div className="menu_text_container">
            <div className="text">Home</div>
          </div>
        </Link>
        <Link to="/menu">
          <MdRestaurantMenu />
          <div className="menu_text_container">
            <div className="text">Menu</div>
          </div>
        </Link>
        <Link to="opening-times">
          <MdAvTimer />
          <div className="menu_text_container">
            <div className="text">Opening Times</div>
          </div>
        </Link>
        <Link to="/reservations">
          <MdBookmark />
          <div className="menu_text_container">
            <div className="text">Reservations</div>
          </div>
        </Link>
        <div>
          <SideNav />
          <div className="menu_text_container">
            <div className="text">Contact</div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default PermanentNav
