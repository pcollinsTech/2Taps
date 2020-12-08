import React, { Fragment, useState } from "react"
import { Container, Row } from "react-bootstrap"

const MenuChooser = props => {
  const { menu, changeMenu } = props
  const [choice, setChoice] = useState("food")

  const menuChange = choice => {
    setChoice(choice)
    changeMenu(choice)
  }

  return (
    <Fragment>
      <div className="menu_chooser">
        <Container className="my-5">
          <Row>
            <div className="col-6 text-center px-3">
              <button
                className={`btn ${
                  choice === "food" || menu === "food" ? "menu_active" : ""
                }`}
                onClick={() => menuChange("food")}
              >
                Food
              </button>
            </div>
            <div className="col-6 text-center px-3">
              <button
                className={`btn ${choice === "drinks" ? "menu_active" : ""}`}
                onClick={() => menuChange("drinks")}
              >
                Drinks
              </button>
            </div>
          </Row>
        </Container>
      </div>
    </Fragment>
  )
}

export default MenuChooser
