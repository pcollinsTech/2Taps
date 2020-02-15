import React, { Fragment } from "react"
import DrinkItem from "../DrinkItem"

const Spirits = ({ menu }) => {
  return (
    <Fragment>
      <div className="col-sm-6">
        {menu.vodkas.map(item => (
          <DrinkItem title={item.title} price={item.price} />
        ))}
      </div>
      <div className="col-sm-6">
        {menu.rums.map(item => (
          <DrinkItem title={item.title} price={item.price} />
        ))}
      </div>
      <div className="col-sm-6">
        {menu.irishWhiskey.map(item => (
          <DrinkItem title={item.title} price={item.price} />
        ))}
      </div>
      <div className="col-sm-6">
        {menu.usBourbon.map(item => (
          <DrinkItem title={item.title} price={item.price} />
        ))}
      </div>
      <div className="col-sm-6">
        {menu.cognac.map(item => (
          <DrinkItem title={item.title} price={item.price} />
        ))}
      </div>
      <div className="col-sm-6">
        {menu.liqueurVermouth.map(item => (
          <DrinkItem title={item.title} price={item.price} />
        ))}
      </div>
      <div className="col-sm-6">
        {menu.digestifs.map(item => (
          <DrinkItem title={item.title} price={item.price} />
        ))}
      </div>
    </Fragment>
  )
}

export default Spirits
