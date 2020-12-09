import React, { Fragment } from "react"
import DrinkItem from "../DrinkItem"

const Soft = ({ drinks }) => {
  let halfwayThrough = Math.floor(drinks.length / 2)
  let arrayFirstHalf = drinks.slice(0, halfwayThrough + 1 )
  let arraySecondHalf = drinks.slice(halfwayThrough + 1, drinks.length)
  return (
    <Fragment>
      <div className="col-sm-6">
        {arrayFirstHalf.map(item => (
          <DrinkItem title={item.title} price={item.price} />
        ))}
      </div>
      <div className="col-sm-6">
        {arraySecondHalf.map(item => (
          <DrinkItem title={item.title} price={item.price} />
        ))}
      </div>
    </Fragment>
  )
}

export default Soft
