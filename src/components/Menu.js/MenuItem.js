import React, { Fragment } from "react"
import { Row } from "react-bootstrap"

const MenuItem = ({ title, description, price }) => {
  return (
    <Fragment>
      <Row>
        <div className="col-9">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        <div className="col-3">
          <h4>{price}</h4>
        </div>
      </Row>
    </Fragment>
  )
}

export default MenuItem
