import React, { Fragment } from "react"
import MenuItem from "../MenuItem"

const Roses = ({ roses, champagnes }) => {
  return (
    <Fragment>
      <h3 className="my-3">Roses</h3>
      {roses.map(item => (
        <MenuItem
          title={item.title}
          price={item.price}
          description={item.description}
        />
      ))}
      <h3 className="my-3">Champagne Sparkling & Dessert Wine</h3>
      {champagnes.map(item => (
        <MenuItem
          title={item.title}
          price={item.price}
          description={item.description}
        />
      ))}
    </Fragment>
  )
}

export default Roses
