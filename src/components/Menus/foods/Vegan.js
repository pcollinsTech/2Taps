import React, { Fragment } from "react"
import MenuItem from "../MenuItem"

const Vegan = ({ menu }) => {
  return (
    <Fragment>
      {menu.map(item => (
        <MenuItem
          title={item.title}
          price={item.price}
          description={item.description}
        />
      ))}
      <h3>Dessert</h3>
      <MenuItem
          title="Chocolate Brownie"
          price="£6"
          description="Served with vegan ice cream"
        />
    </Fragment>
  )
}

export default Vegan
