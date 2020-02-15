import React, { Fragment } from "react"
import MenuItem from "../MenuItem"

const Reds = ({ drinks }) => {
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

export default Reds
