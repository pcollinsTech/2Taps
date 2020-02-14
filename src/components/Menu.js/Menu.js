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

const Menu = ({ images }) => {
  const [menu, setMenu] = useState("starters")
  return (
    <Fragment>
      <Container className="mt-3 menu">
        <Row className="d-flex justify-content-between">
          <div
            className={`btn ${menu === "starters" ? "active" : ""}`}
            onClick={() => setMenu("starters")}
          >
            Starters
          </div>
          <div
            className={`btn ${menu === "meat" ? "active" : ""}`}
            onClick={() => setMenu("meat")}
          >
            Meat
          </div>
          <div
            className={`btn ${menu === "fish" ? "active" : ""}`}
            onClick={() => setMenu("fish")}
          >
            Fish
          </div>
          <div
            className={`btn ${menu === "vegetarian" ? "active" : ""}`}
            onClick={() => setMenu("vegetarian")}
          >
            Vegetarian
          </div>

          <div
            className={`btn ${menu === "salads" ? "active" : ""}`}
            onClick={() => setMenu("salads")}
          >
            Salads
          </div>
          <div
            className={`btn ${menu === "paella" ? "active" : ""}`}
            onClick={() => setMenu("paella")}
          >
            Paella
          </div>
          <div
            className={`btn ${menu === "desserts" ? "active" : ""}`}
            onClick={() => setMenu("desserts")}
          >
            Desserts
          </div>
          <div
            className={`btn ${menu === "lunch" ? "active" : ""}`}
            onClick={() => setMenu("lunch")}
          >
            Lunch
          </div>
          <div
            className={`btn ${menu === "mains" ? "active" : ""}`}
            onClick={() => setMenu("mains")}
          >
            Mains
          </div>
          <div
            className={`btn ${menu === "kids" ? "active" : ""}`}
            onClick={() => setMenu("kids")}
          >
            Kids
          </div>
        </Row>
      </Container>
      <Container className="my-3 menu_container">
        <Row>
          {menu === "desserts" && (
            <Desserts menu={menuData.desserts} image={images.dessert} />
          )}
          {menu === "fish" && <Fish menu={menuData.fish} />}
          {menu === "kids" && <Kids menu={menuData.kids} />}
          {menu === "lunch" && <Lunch menu={menuData.lunch} />}
          {menu === "mains" && <Mains menu={menuData.mains} />}
          {menu === "meat" && <Meat menu={menuData.meat} image={images.meat} />}
          {menu === "paella" && <Paella menu={menuData.paella} />}
          {menu === "salads" && <Salads menu={menuData.salads} />}
          {menu === "starters" && <Starters menu={menuData.starters} />}
          {menu === "vegetarian" && (
            <Vegetarian menu={menuData.vegetarian} image={images.vegetarian} />
          )}
        </Row>
      </Container>
    </Fragment>
  )
}

export default Menu
