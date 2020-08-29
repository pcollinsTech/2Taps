import React, { useState } from "react"
import { graphql } from "gatsby"
import { Row, Container } from "react-bootstrap"
import Banner from "../components/Banner"
import Layout from "../layout/Layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"
import ScrollAnimation from "react-animate-on-scroll"
// import Modal from "../components/Modal"
import frontMenu from "../assets/images/takeAwayMenus/front.jpeg"
import backMenu from "../assets/images/takeAwayMenus/back.jpeg"

const Ta = props => {
  const [front, setFront] = useState(false)
  const [back, setBack] = useState(false)
  return (
    <Layout>
      <SEO title="Home" />
      <Banner
        img={props.data.image1.childImageSharp.fluid}
        title="Take Away"
        subHeader={`Collection Service`}
      />
      {/* {/* <Modal show={open} onClose={setOpen}>
        Here's some content for the modal
      </Modal> */}
      <div className="inner_page">
        <ScrollAnimation animateIn="fadeInUp">
          <Container className="inner_page_section">
            <Row className="justify-content-md-center my-5">
              <div className="col-lg-10 col-sm-10 text-center pb-4">
                <p>
                  Our take away collection service is still running
                  <br />
                  <br />
                  Orders must be placed by phone on the restaurant number – 028
                  90311414 and collected in person at the restaurant front door.
                  <br />
                  <br />
                  We will be accepting <b>card payments only.</b>
                  <br />
                  <br />
                </p>
              </div>
              <div
                onClick={() => {
                  setFront(!front)
                }}
              >
                <img src={frontMenu} alt="front" />
              </div>
              <div className="container text-center my-5">
                <h3 className="pb-3">How to order</h3>
                <div className="row text-center ">
                  <p>
                    Phones open from 12pm <br />
                    Pre orders on the day
                    <br />
                    Times slots given from 3-8pm
                    <br />
                    <br />
                    To help us ensure social distancing guidelines are met,
                    please arrive at your allocated time. This will also help
                    maintain the quality of your lovely tapas!
                  </p>
                </div>
              </div>
              <hr />
              <div onClick={() => setBack(!back)}>
                <img src={backMenu} alt="back" />
              </div>
            </Row>
          </Container>
        </ScrollAnimation>
      </div>
      {front && (
        <Lightbox
          mainSrc={frontMenu}
          nextSrc={backMenu}
          prevSrc={frontMenu}
          onCloseRequest={() => setFront(!front)}
        />
      )}
      {back && (
        <Lightbox
          mainSrc={backMenu}
          nextSrc={backMenu}
          prevSrc={frontMenu}
          onCloseRequest={() => setFront(!front)}
        />
      )}
    </Layout>
  )
}

export default Ta

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "bannerOne.jpg" }) {
      ...indexImage
    }
    image2: file(relativePath: { eq: "outside2.jpg" }) {
      ...pageImage
    }
    image3: file(relativePath: { eq: "birdsEyeTable.jpeg" }) {
      ...indexImage
    }
    march2020: file(relativePath: { eq: "march2020.jpg" }) {
      ...aboutImage
    }
    aromaBella: file(relativePath: { eq: "aromaBella.png" }) {
      ...aboutImage
    }
  }
`
