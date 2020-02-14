import React from "react"
import Img from "gatsby-image"

const Banner = ({ img, title, subHeader }) => {
  const html = { __html: subHeader }
  return (
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
      </div>
    </section>
  )
}

export default Banner
