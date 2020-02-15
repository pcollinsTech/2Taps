import React, { Fragment } from "react"
import MenuItem from "../MenuItem"

const Kids = ({ menu }) => {
  return (
    <Fragment>
      <h3 className="my-3 text-center mx-auto">
        £8 - Includes Fruice Juice
        <br />
        <span style={{ fontSize: "15px" }}>
          ( Colouring books available on request )
        </span>
      </h3>

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
