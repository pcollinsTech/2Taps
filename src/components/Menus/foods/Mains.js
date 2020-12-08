import React, { Fragment } from "react"
import MenuItem from "../MenuItem"

const Mains = ({ menu }) => {
  return (
    <Fragment>
      <h3 className="my-3 mx-auto">Serving all day</h3>
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

export default Mains
