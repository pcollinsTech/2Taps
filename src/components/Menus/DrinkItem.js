import React, { Fragment } from "react"
import { Row, Container } from "react-bootstrap"

const DrinkItem = ({ title, description, price }) => {
  function createMarkup() {
    return { __html: price }
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
          <div className="col-sm-8">
            <h4>{title}</h4>
          </div>
          <div className="col-sm-4 text-right">
            <h4 dangerouslySetInnerHTML={createMarkup()} />
          </div>
        </Row>
      </Container>
    </Fragment>
  )
}

export default DrinkItem
