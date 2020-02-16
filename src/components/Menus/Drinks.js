import React, { Fragment, useState } from "react"
import { Container, Row } from "react-bootstrap"

import Cocktails from "./drinks/Cocktails"
import Reds from "./drinks/Reds"
import Beers from "./drinks/Beers"
import Coffees from "./drinks/Coffees"
import Gins from "./drinks/Gins"
import Mocktails from "./drinks/Mocktails"
import Soft from "./drinks/Soft"
import Spirits from "./drinks/Spirits"
import Whites from "./drinks/Whites"
import Roses from "./drinks/Roses"
import Sangrias from "./drinks/Sangrias"
import { drinksData } from "./drinks/drinksData"

const Drinks = () => {
  const [drinksMenu, setDrinks] = useState("sangrias")
  return (
    <Fragment>
      <Container className="menu">
        <Row className="d-flex justify-content-around">
          <div
            className={`btn ${drinksMenu === "whites" ? "active" : ""}`}
            onClick={() => setDrinks("whites")}
          >
            Whites
          </div>
          <div
            className={`btn ${drinksMenu === "reds" ? "active" : ""}`}
            onClick={() => setDrinks("reds")}
          >
            Reds
          </div>
          <div
            className={`btn ${drinksMenu === "roses" ? "active" : ""}`}
            onClick={() => setDrinks("roses")}
          >
            Roses
          </div>
          <div
            className={`btn ${drinksMenu === "sangrias" ? "active" : ""}`}
            onClick={() => setDrinks("sangrias")}
          >
            Sangrias
          </div>
          <div
            className={`btn ${drinksMenu === "cocktails" ? "active" : ""}`}
            onClick={() => setDrinks("cocktails")}
          >
            Cocktails
          </div>
          <div
            className={`btn ${drinksMenu === "gins" ? "active" : ""}`}
            onClick={() => setDrinks("gins")}
          >
            Gins
          </div>
          <div
            className={`btn ${drinksMenu === "mocktails" ? "active" : ""}`}
            onClick={() => setDrinks("mocktails")}
          >
            Mocktails
          </div>
          <div
            className={`btn ${drinksMenu === "beers" ? "active" : ""}`}
            onClick={() => setDrinks("beers")}
          >
            Beers
          </div>
          <div
            className={`btn ${drinksMenu === "coffees" ? "active" : ""}`}
            onClick={() => setDrinks("coffees")}
          >
            Hot Drinks
          </div>
          <div
            className={`btn ${drinksMenu === "soft" ? "active" : ""}`}
            onClick={() => setDrinks("soft")}
          >
            Soft Drinks
          </div>
        </Row>
      </Container>
      <Container className="menu_container">
        <Row>
          {drinksMenu === "cocktails" && (
            <Cocktails drinks={drinksData.cocktails} />
          )}
          {drinksMenu === "sangrias" && (
            <Sangrias drinks={drinksData.sangrias} />
          )}
          {drinksMenu === "reds" && <Reds drinks={drinksData.reds} />}
          {drinksMenu === "whites" && <Whites drinks={drinksData.whites} />}
          {drinksMenu === "roses" && <Roses drinks={drinksData.roses} />}

          {drinksMenu === "beers" && <Beers drinks={drinksData.beers} />}
          {drinksMenu === "spirits" && <Spirits drinks={drinksData.spirits} />}
          {drinksMenu === "soft" && <Soft drinks={drinksData.softDrinks} />}
          {drinksMenu === "coffees" && <Coffees drinks={drinksData.coffees} />}
          {drinksMenu === "gins" && <Gins drinks={drinksData.gins} />}
          {drinksMenu === "mocktails" && (
            <Mocktails drinks={drinksData.mocktails} />
          )}
        </Row>
      </Container>
      <Container className="menu">
        <Row className="d-flex justify-content-around">
          <div
            className={`btn ${drinksMenu === "whites" ? "active" : ""}`}
            onClick={() => setDrinks("whites")}
          >
            Whites
          </div>
          <div
            className={`btn ${drinksMenu === "reds" ? "active" : ""}`}
            onClick={() => setDrinks("reds")}
          >
            Reds
          </div>
          <div
            className={`btn ${drinksMenu === "sangrias" ? "active" : ""}`}
            onClick={() => setDrinks("sangrias")}
          >
            Sangrias
          </div>
          <div
            className={`btn ${drinksMenu === "cocktails" ? "active" : ""}`}
            onClick={() => setDrinks("cocktails")}
          >
            Cocktails
          </div>
          <div
            className={`btn ${drinksMenu === "gins" ? "active" : ""}`}
            onClick={() => setDrinks("gins")}
          >
            Gins
          </div>
          <div
            className={`btn ${drinksMenu === "mocktails" ? "active" : ""}`}
            onClick={() => setDrinks("mocktails")}
          >
            Mocktails
          </div>
          <div
            className={`btn ${drinksMenu === "beers" ? "active" : ""}`}
            onClick={() => setDrinks("beers")}
          >
            Beers
          </div>
          <div
            className={`btn ${drinksMenu === "coffees" ? "active" : ""}`}
            onClick={() => setDrinks("coffees")}
          >
            Hot Drinks
          </div>
          <div
            className={`btn ${drinksMenu === "soft" ? "active" : ""}`}
            onClick={() => setDrinks("soft")}
          >
            Soft Drinks
          </div>
        </Row>
      </Container>
    </Fragment>
  )
}

export default Drinks
