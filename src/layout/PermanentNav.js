import React, { Fragment } from "react"
import { MdRestaurantMenu, MdAvTimer, MdBookmark } from "react-icons/md"
import { Link } from "gatsby"
const PermanentNav = () => {
  return (
    <Fragment>
      <div class="permant-bar">
        <Link to="/menus">
          <MdRestaurantMenu />
        </Link>
        <Link to="opening-times">
          <MdAvTimer />
        </Link>
        <Link to="/reservations">
          <MdBookmark />
        </Link>
      </div>
    </Fragment>
  )
}

export default PermanentNav
