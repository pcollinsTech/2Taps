import React, { Fragment } from "react"
import MenuItem from "../MenuItem"

const Kids = ({ menu }) => {
  return (
    <Fragment>
      <h3>Price</h3>

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

export default Kids
