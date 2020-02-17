import React, { Fragment, useState } from "react"
import MenuChooser from "./MenuChooser"
import Food from "./Food"
import Drinks from "./Drinks"

const Menu = () => {
  const [menu, setMenu] = useState("food")

  const changeMenu = menu => {
    setMenu(menu)
  }
  return (
    <Fragment>
      <MenuChooser changeMenu={changeMenu} />

      {menu === "food" && <Food />}
      {menu === "drinks" && <Drinks />}
    </Fragment>
  )
}

export default Menu
