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
import garland from "../../assets/images/garland.png"

const Food = () => {
  const [foodMenu, setFoodMenu] = useState("starters")
  return (
    <Fragment>
      <Container className="menu">
        <Row className="d-flex justify-content-around">
          <div
            className={`btn ${foodMenu === "starters" ? "active" : ""}`}
            onClick={() => setFoodMenu("starters")}
            role="button"
            tabIndex={0}
            onKeyDown={() => setFoodMenu("starters")}
          >
            Breads &amp; Platters
          </div>
          <div
            className={`btn ${foodMenu === "meat" ? "active" : ""}`}
            onClick={() => setFoodMenu("meat")}
            role="button"
            tabIndex={0}
            onKeyDown={() => setFoodMenu("meat")}
          >
            Meat
          </div>
          <div
            className={`btn ${foodMenu === "fish" ? "active" : ""}`}
            onClick={() => setFoodMenu("fish")}
            role="button"
            tabIndex={0}
            onKeyDown={() => setFoodMenu("fish")}
          >
            Fish
          </div>
          <div
            className={`btn ${foodMenu === "vegetarian" ? "active" : ""}`}
            onClick={() => setFoodMenu("vegetarian")}
            role="button"
            tabIndex={0}
            onKeyDown={() => setFoodMenu("vegetarian")}
          >
            Vegetarian
          </div>

          <div
            className={`btn ${foodMenu === "salads" ? "active" : ""}`}
            onClick={() => setFoodMenu("salads")}
            role="button"
            tabIndex={0}
            onKeyDown={() => setFoodMenu("salads")}
          >
            Salads
          </div>
          <div
            className={`btn ${foodMenu === "paella" ? "active" : ""}`}
            onClick={() => setFoodMenu("paella")}
            role="button"
            tabIndex={0}
            onKeyDown={() => setFoodMenu("paella")}
          >
            Paella
          </div>
          <div
            className={`btn ${foodMenu === "desserts" ? "active" : ""}`}
            onClick={() => setFoodMenu("desserts")}
            role="button"
            tabIndex={0}
            onKeyDown={() => setFoodMenu("desserts")}
          >
            Desserts
          </div>
          {/* <div
            className={`btn ${foodMenu === "lunch" ? "active" : ""}`}
            onClick={() => setFoodMenu("lunch")}
            role="button"
            tabIndex={0}
            onKeyDown={() => setFoodMenu("lunch")}
          >
            Lunch
          </div> */}
          <div
            className={`btn ${foodMenu === "mains" ? "active" : ""}`}
            onClick={() => setFoodMenu("mains")}
            role="button"
            tabIndex={0}
            onKeyDown={() => setFoodMenu("mains")}
          >
            Mains
          </div>
          {/* <div
            className={`btn ${foodMenu === "kids" ? "active" : ""}`}
            onClick={() => setFoodMenu("kids")}
            role="button"
            tabIndex={0}
            onKeyDown={() => setFoodMenu("kids")}
          >
            Kids
          </div> */}
        </Row>
      </Container>
      <div >
        <Container className="xmas_container">

        <img src={garland} alt="" width="100%" />
        </Container>
        <Container className="menu_container">


          <Row>
            {foodMenu === "desserts" && <Desserts menu={menuData.desserts} />}
            {foodMenu === "fish" && <Fish menu={menuData.fish} />}
            {/* {foodMenu === "kids" && <Kids menu={menuData.kids} />} */}
            {/* {foodMenu === "lunch" && <Lunch menu={menuData.lunch} />} */}
            {foodMenu === "mains" && <Mains menu={menuData.mains} />}
            {foodMenu === "meat" && <Meat menu={menuData.meat} />}
            {foodMenu === "paella" && <Paella menu={menuData.paella} />}
            {foodMenu === "salads" && <Salads menu={menuData.salads} />}
            {foodMenu === "starters" && <Starters menu={menuData.starters} />}
            {foodMenu === "vegetarian" && (
              <Vegetarian menu={menuData.vegetarian} />
            )}
            <br />
            <br />
            <br />
            <span style={{ fontSize: "12px" }} className="text-center pt-5">
              If you have any dietary requirements please speak to staff about the
              ingredients in your meal, when making your order. Please be advised
              that food allergens are handled in the kitchen. In some cases,
              allergensmay be unavoidably present due to shared equipment or the
              ingredients used.
            </span>
          </Row>
        </Container>
      </div>

      <Container className="menu">
        <Row className="d-flex justify-content-around">
          <div
            className={`btn ${foodMenu === "starters" ? "active" : ""}`}
            onClick={() => setFoodMenu("starters")}
            role="button"
            tabIndex={0}
            onKeyDown={() => setFoodMenu("starters")}
          >
            Entres
          </div>
          <div
            className={`btn ${foodMenu === "meat" ? "active" : ""}`}
            onClick={() => setFoodMenu("meat")}
            role="button"
            tabIndex={0}
            onKeyDown={() => setFoodMenu("meat")}
          >
            Meat
          </div>
          <div
            className={`btn ${foodMenu === "fish" ? "active" : ""}`}
            onClick={() => setFoodMenu("fish")}
            role="button"
            tabIndex={0}
            onKeyDown={() => setFoodMenu("fish")}
          >
            Fish
          </div>
          <div
            className={`btn ${foodMenu === "vegetarian" ? "active" : ""}`}
            onClick={() => setFoodMenu("vegetarian")}
            role="button"
            tabIndex={0}
            onKeyDown={() => setFoodMenu("vegetarian")}
          >
            Vegetarian
          </div>

          <div
            className={`btn ${foodMenu === "salads" ? "active" : ""}`}
            onClick={() => setFoodMenu("salads")}
            role="button"
            tabIndex={0}
            onKeyDown={() => setFoodMenu("salads")}
          >
            Salads
          </div>
          <div
            className={`btn ${foodMenu === "paella" ? "active" : ""}`}
            onClick={() => setFoodMenu("paella")}
            role="button"
            tabIndex={0}
            onKeyDown={() => setFoodMenu("paella")}
          >
            Paella
          </div>
          <div
            className={`btn ${foodMenu === "desserts" ? "active" : ""}`}
            onClick={() => setFoodMenu("desserts")}
            role="button"
            tabIndex={0}
            onKeyDown={() => setFoodMenu("desserts")}
          >
            Desserts
          </div>
          {/* <div
            className={`btn ${foodMenu === "lunch" ? "active" : ""}`}
            onClick={() => setFoodMenu("lunch")}
            role="button"
            tabIndex={0}
            onKeyDown={() => setFoodMenu("lunch")}
          >
            Lunch
          </div> */}
          <div
            className={`btn ${foodMenu === "mains" ? "active" : ""}`}
            onClick={() => setFoodMenu("mains")}
            role="button"
            tabIndex={0}
            onKeyDown={() => setFoodMenu("mains")}
          >
            Mains
          </div>
          {/* <div
            className={`btn ${foodMenu === "kids" ? "active" : ""}`}
            onClick={() => setFoodMenu("kids")}
            role="button"
            tabIndex={0}
            onKeyDown={() => setFoodMenu("kids")}
          >
            Kids
          </div> */}
        </Row>
      </Container>
    </Fragment>
  )
}

export default Food
