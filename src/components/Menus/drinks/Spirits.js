import React, { Fragment } from "react"
import DrinkItem from "../DrinkItem"

const Spirits = ({ drinks }) => {
  console.log("Drinks", drinks)
  return (
    <Fragment>
      <div className="col-sm-6">
        <h3 className="my-3 text-center">Vodka</h3>
        {drinks.vodkas.map(item => (
          <DrinkItem title={item.title} price={item.price} />
        ))}

        <br />
        <h3 className="my-3 text-center">Brandy &amp; Cognac</h3>
        {drinks.cognac.map(item => (
          <DrinkItem title={item.title} price={item.price} />
        ))}
        <br />
      </div>

      <div className="col-sm-6">
        <h3 className="my-3 text-center">Whiskey</h3>
        {drinks.whiskey.map(item => (
          <DrinkItem title={item.title} price={item.price} />
        ))}
      </div>

      <div className="col-sm-6">
        <h3 className="my-3 text-center">Liqueurs, Apéritifs &amp; Shots</h3>
        {drinks.digestifs.map(item => (
          <DrinkItem title={item.title} price={item.price} />
        ))}
      </div>
      <div className="col-sm-6">
        <h3 className="my-3 text-center">Rum</h3>
        {drinks.rums.map(item => (
          <DrinkItem title={item.title} price={item.price} />
        ))}
      </div>
      <div className="col-sm-6">
        <h3 className="my-3 text-center">Tequila</h3>
        {drinks.tequila.map(item => (
          <DrinkItem title={item.title} price={item.price} />
        ))}
      </div>
    </Fragment>
  )
}

export default Spirits
