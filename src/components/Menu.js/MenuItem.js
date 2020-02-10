import React, { Fragment } from "react"
import { Row, Container } from "react-bootstrap"

const MenuItem = ({ title, description, price }) => {
  function createMarkup() {
    return { __html: price }
  }
  return (
    <Fragment>
      <Container>
        <Row className="my-4">
          <div className="col-sm-9">
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
          <div className="col-sm-3 text-right">
            <h4 dangerouslySetInnerHTML={createMarkup()} />
          </div>
        </Row>
      </Container>
    </Fragment>
  )
}

export default MenuItem
