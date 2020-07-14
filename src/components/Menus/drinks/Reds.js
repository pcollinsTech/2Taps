import React, { Fragment } from "react"
import MenuItem from "../MenuItem"

const Reds = ({ drinks }) => {
  return (
    <Fragment>
      <h3 className="my-3 text-center">House</h3>
      {drinks.houseReds.map(item => (
        <MenuItem
          title={item.title}
          price={item.price}
          description={item.description}
        />
      ))}
      <h3 className="my-3 text-center">Special</h3>
      {drinks.reds.map(item => (
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
