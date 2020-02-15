import React, { Fragment, useState } from "react"
import { Container, Row } from "react-bootstrap"

import Desserts from "./foods/Desserts"
import Fish from "./foods/Fish"
import Kids from "./foods/Kids"
import Lunch from "./foods/Lunch"
import Mains from "./foods/Mains"
import Meat from "./foods/Meat"
import Paella from "./foods/Paella"
import Salads from "./foods/Salads"
import Starters from "./foods/Starters"
import Vegetarian from "./foods/Vegetarian"
import { menuData } from "./foods/menuData"

const Food = () => {
  const [foodMenu, setFoodMenu] = useState("starters")
  return (
    <Fragment>
      <div className="menu">
        <Container>
          <Row className="d-flex justify-content-around">
            <div
              className={`btn ${foodMenu === "starters" ? "active" : ""}`}
              onClick={() => setFoodMenu("starters")}
            >
              Entres
            </div>
            <div
              className={`btn ${foodMenu === "meat" ? "active" : ""}`}
              onClick={() => setFoodMenu("meat")}
            >
              Meat
            </div>
            <div
              className={`btn ${foodMenu === "fish" ? "active" : ""}`}
              onClick={() => setFoodMenu("fish")}
            >
              Fish
            </div>
            <div
              className={`btn ${foodMenu === "vegetarian" ? "active" : ""}`}
              onClick={() => setFoodMenu("vegetarian")}
            >
              Vegetarian
            </div>

            <div
              className={`btn ${foodMenu === "salads" ? "active" : ""}`}
              onClick={() => setFoodMenu("salads")}
            >
              Salads
            </div>
            <div
              className={`btn ${foodMenu === "paella" ? "active" : ""}`}
              onClick={() => setFoodMenu("paella")}
            >
              Paella
            </div>
            <div
              className={`btn ${foodMenu === "desserts" ? "active" : ""}`}
              onClick={() => setFoodMenu("desserts")}
            >
              Desserts
            </div>
            <div
              className={`btn ${foodMenu === "lunch" ? "active" : ""}`}
              onClick={() => setFoodMenu("lunch")}
            >
              Lunch
            </div>
            <div
              className={`btn ${foodMenu === "mains" ? "active" : ""}`}
              onClick={() => setFoodMenu("mains")}
            >
              Mains
            </div>
            <div
              className={`btn ${foodMenu === "kids" ? "active" : ""}`}
              onClick={() => setFoodMenu("kids")}
            >
              Kids
            </div>
          </Row>
        </Container>
      </div>
      <Container className=" menu_container">
        <Row>
          {foodMenu === "desserts" && <Desserts menu={menuData.desserts} />}
          {foodMenu === "fish" && <Fish menu={menuData.fish} />}
          {foodMenu === "kids" && <Kids menu={menuData.kids} />}
          {foodMenu === "lunch" && <Lunch menu={menuData.lunch} />}
          {foodMenu === "mains" && <Mains menu={menuData.mains} />}
          {foodMenu === "meat" && <Meat menu={menuData.meat} />}
          {foodMenu === "paella" && <Paella menu={menuData.paella} />}
          {foodMenu === "salads" && <Salads menu={menuData.salads} />}
          {foodMenu === "starters" && <Starters menu={menuData.starters} />}
          {foodMenu === "vegetarian" && (
            <Vegetarian menu={menuData.vegetarian} />
          )}
        </Row>
      </Container>
    </Fragment>
  )
}

export default Food