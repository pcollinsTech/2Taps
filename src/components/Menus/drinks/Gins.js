import React, { Fragment } from "react"
import MenuItem from "../MenuItem"

const Gins = ({ drinks }) => {
  let halfwayThrough = Math.floor(drinks.length / 2)
  let arrayFirstHalf = drinks.slice(0, halfwayThrough + 1)
  let arraySecondHalf = drinks.slice(halfwayThrough, drinks.length)

  return (
    <Fragment>
      <div className="col-sm-6">
        {arrayFirstHalf.map(item => (
          <MenuItem
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>
      <div className="col-sm-6">
        {arraySecondHalf.map(item => (
          <MenuItem
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>
    </Fragment>
  )
}

export default Gins
