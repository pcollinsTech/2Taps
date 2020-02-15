import React, { Fragment } from "react"
import {
  MdRestaurantMenu,
  MdAvTimer,
  MdBookmark,
  MdHome,
  MdAccountCircle,
} from "react-icons/md"
import { Link } from "gatsby"
import SideNav from "./SideNav"
const PermanentNav = () => {
  return (
    <Fragment>
      <div className="permant-bar">
        <div className="menu_section">
          <Link to="/" className="d-flex justify-content-between">
            <div className="menu_text_container">
              <div className="text">Home</div>
            </div>
            <MdHome />
          </Link>
        </div>
        <div className="menu_section">
          <Link to="/about" className="d-flex justify-content-between">
            <div className="menu_text_container">
              <div className="text">About</div>
            </div>
            <MdAccountCircle />
          </Link>
        </div>
        <div className="menu_section">
          <Link to="/menus" className="d-flex justify-content-between">
            <div className="menu_text_container">
              <div className="text">Menu</div>
            </div>
            <MdRestaurantMenu />
          </Link>
        </div>
        <div className="menu_section">
          <Link to="opening-times" className="d-flex justify-content-between">
            <div className="menu_text_container">
              <div className="text">Hours</div>
            </div>
            <MdAvTimer />
          </Link>
        </div>
        <div className="menu_section">
          <Link to="/reservations" className="d-flex justify-content-between">
            <div className="menu_text_container">
              <div className="text">Reservations</div>
            </div>
            <MdBookmark />
          </Link>
        </div>
        <div className="menu_section">
          <div className="d-flex justify-content-between contact">
            <div className="menu_text_container">
              <div className="text">Contact</div>
            </div>
            <SideNav />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default PermanentNav
