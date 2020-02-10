import React, { Fragment, useState } from "react"
import { Container, Row } from "react-bootstrap"

import Desserts from "./Desserts"
import Fish from "./Fish"
import Kids from "./Kids"
import Lunch from "./Lunch"
import Mains from "./Mains"
import Meat from "./Meat"
import Paella from "./Paella"
import Salads from "./Salads"
import Starters from "./Starters"
import Vegetarian from "./Vegetarian"
import { menuData } from "./menuData"

const Menu = () => {
  const [menu, setMenu] = useState("starters")
  return (
    <Fragment>
      <Container className="mt-3 menu">
        <Row className="d-flex justify-content-between">
          <div className="btn btn-primary" onClick={() => setMenu("starters")}>
            Starters
          </div>
          <div className="btn btn-primary" onClick={() => setMenu("meat")}>
            Meat
          </div>
          <div className="btn btn-primary" onClick={() => setMenu("fish")}>
            Fish
          </div>
          <div
            className="btn btn-primary"
            onClick={() => setMenu("vegetarian")}
          >
            Vegetarian
          </div>

          <div className="btn btn-primary" onClick={() => setMenu("salads")}>
            Salads
          </div>
          <div className="btn btn-primary" onClick={() => setMenu("paella")}>
            Paella
          </div>
          <div className="btn btn-primary" onClick={() => setMenu("desserts")}>
            Desserts
          </div>
          <div className="btn btn-primary" onClick={() => setMenu("lunch")}>
            Lunch
          </div>
          <div className="btn btn-primary" onClick={() => setMenu("mains")}>
            Mains
          </div>
          <div className="btn btn-primary" onClick={() => setMenu("kids")}>
            Kids
          </div>
        </Row>
      </Container>
      <Container className="my-3 menu_container">
        <Row>
          {menu === "desserts" && <Desserts menu={menuData.desserts} />}
          {menu === "fish" && <Fish menu={menuData.fish} />}
          {menu === "kids" && <Kids menu={menuData.kids} />}
          {menu === "lunch" && <Lunch menu={menuData.lunch} />}
          {menu === "mains" && <Mains menu={menuData.mains} />}
          {menu === "meat" && <Meat menu={menuData.meat} />}
          {menu === "paella" && <Paella menu={menuData.paella} />}
          {menu === "salads" && <Salads menu={menuData.salads} />}
          {menu === "starters" && <Starters menu={menuData.starters} />}
          {menu === "vegetarian" && <Vegetarian menu={menuData.vegetarian} />}
        </Row>
      </Container>
    </Fragment>
  )
}

export default Menu
