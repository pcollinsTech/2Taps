import React, { Fragment } from "react"
import MenuItem from "../MenuItem"

const Vegetarian = ({ menu }) => {
  return (
    <Fragment>
      {menu.map(item => (
        <MenuItem
          title={item.title}
          price={item.price}
          description={item.description}
        />
      ))}
    </Fragment>
  )
}

export default Vegetarian