import React, { Fragment } from "react"
import { Row, Container } from "react-bootstrap"

const DrinkItem = ({ title, description, price }) => {
  function createMarkup() {
    return { __html: price }
  }
  function createMarkupDescription() {
    return { __html: description }
  }
  function capitalizeFLetter(value) {
    return value[0].toUpperCase() + value.slice(1)
  }
  return (
    <Fragment>
      <Container>
        <Row
          className="menu_item"
          style={{
            filter: "opacity(100%)",
            filter: "brightness(100%)",
          }}
        >
          <div className="col-sm-7">
            <h4>{capitalizeFLetter(title)}</h4>
            <p dangerouslySetInnerHTML={createMarkupDescription()} />
          </div>
          <div className="col-sm-5 text-right">
            <h4 dangerouslySetInnerHTML={createMarkup()} />
          </div>
        </Row>
      </Container>
    </Fragment>
  )
}

export default DrinkItem
