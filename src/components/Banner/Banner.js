import React from "react"
import Img from "gatsby-image"
import ReservationContext from "../../context/ReservationContext"

const Banner = ({ img, title, subHeader }) => {
  const html = { __html: subHeader }
  return (
    <ReservationContext.Consumer>
      {toggler => (
        <section id="blog_banner" className="blog_major">
          <Img fluid={img} loading="lazy" style={{ position: "static" }} />
          <div className="inner">
            <header>
              <h1>{title}</h1>
              <br />
              {subHeader && (
                <h5 dangerouslySetInnerHTML={html} className="mobile" />
              )}
            </header>
            <button
              className="btn btn-primary"
              onClick={() => toggler.toggleReservationTab()}
            >
              Order Now
            </button>
          </div>
        </section>
      )}
    </ReservationContext.Consumer>
  )
}

export default Banner
