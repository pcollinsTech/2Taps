import React, { Fragment } from "react"
import MenuItem from "./MenuItem"

import dessert from "../../assets/images/cremeBrule.jpg"

const Desserts = ({ menu, image }, props) => {
  return (
    <Fragment>
      <div
        style={{
          position: "relative",
          // display: "inline-block",
        }}
      >
        <img src={dessert} alt="Creme Brule" />
        <div
          style={{
            position: "absolute",
            zIndex: "999",
            top: 0,
            left: 0,
            right: 0,
            padding: "10px 0",
            paddingBottom: "2rem",
          }}
        >
          {menu.map(item => (
            <MenuItem
              title={item.title}
              price={item.price}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </Fragment>
  )
}

export default Desserts
