import React, { Fragment } from "react"
import MenuItem from "../MenuItem"

const Cocktails = ({ drinks }) => {
  return (
    <Fragment>
      <div className="col-sm-6">
        <h3 className="my-3 text-center">Martinis</h3>
        {drinks.martinis.map(item => (
          <MenuItem
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
        <h3 className="my-3 text-center">Collins</h3>
        {drinks.collins.map(item => (
          <MenuItem
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
        <h3 className="my-3 text-center">Mojitos</h3>
        {drinks.mojitos.map(item => (
          <MenuItem
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>

      <div className="col-sm-6">
        <h3 className="my-3 text-center">House Classics</h3>
        {drinks.houseClassics.map(item => (
          <MenuItem
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
        <h3 className="my-3 text-center">Winter Serves</h3>
        {drinks.winterServes.map(item => (
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

export default Cocktails
