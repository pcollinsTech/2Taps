import React, { Fragment } from "react"
import MenuItem from "../MenuItem"

const Paella = ({ menu }) => {
  return (
    <Fragment>
      {menu.map(item => (
        <MenuItem
          title={item.title}
          price={item.price}
          description={item.description}
        />
      ))}
      <h4 className="mx-auto my-4">
        Paella’s Take 25-30 minutes. may take longer at peak times. (Serves two)
      </h4>
    </Fragment>
  )
}

export default Paella
