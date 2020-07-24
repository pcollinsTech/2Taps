import React, { Fragment } from "react"
import DrinkItem from "../DrinkItem"

const Beers = ({ drinks }) => {
  return (
    <Fragment>
      <div className="col-sm-6">
        <h3 className="my-3 text-center">Draught</h3>
        {drinks.draught.map(item => (
          <DrinkItem title={item.title} price={item.price} />
        ))}
        <h3 className="my-3 text-center">Bottled Beer</h3>
        {drinks.bottledBeer.map(item => (
          <DrinkItem title={item.title} price={item.price} />
        ))}
      </div>

      <div className="col-sm-6">
        <h3 className="my-3 text-center">Ciders, Ales &amp; Pops</h3>
        {drinks.bottledAleCiderPops.map(item => (
          <DrinkItem title={item.title} price={item.price} />
        ))}
      </div>
    </Fragment>
  )
}

export default Beers
