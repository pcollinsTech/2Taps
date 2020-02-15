import React, { Fragment } from "react"
import DrinkItem from "../DrinkItem"

const Coffees = ({ drinks }) => {
  return (
    <Fragment>
      <div className="col-sm-6">
        <h3 className="my-3 text-center">Liqueur</h3>
        {drinks.liqueur.map(item => (
          <DrinkItem title={item.title} price={item.price} />
        ))}
      </div>
      <div className="col-sm-6">
        <h3 className="my-3 text-center">Tea & Coffee</h3>
        {drinks.teaCoffee.map(item => (
          <DrinkItem title={item.title} price={item.price} />
        ))}
      </div>
    </Fragment>
  )
}

export default Coffees
