import React, { Fragment } from "react"
import MenuItem from "../MenuItem"

const Mocktails = ({ drinks }) => {
  return (
    <Fragment>
      {drinks.map(item => (
        <MenuItem
          title={item.title}
          price={item.price}
          description={item.description}
        />
      ))}
    </Fragment>
  )
}

export default Mocktails
