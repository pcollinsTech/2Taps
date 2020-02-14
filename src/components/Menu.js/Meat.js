import React, { Fragment } from "react"
import MenuItem from "./MenuItem"
import meat from "../../assets/images/chorizoPan.jpg"

const Meat = ({ menu, image }, props) => {
  return (
    <Fragment>
      <div
        style={{
          position: "relative",
          // display: "inline-block",
        }}
      >
        <img src={meat} alt="Chorizo Pan" />
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

export default Meat
