import React, { Fragment } from "react"
import MenuItem from "../MenuItem"

const Lunch = ({ menu }) => {
  return (
    <Fragment>
      <h3 className="my-3 mx-auto">12-5pm all lunch time course £11</h3>
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

export default Lunch
