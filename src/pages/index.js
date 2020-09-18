import React, { useState } from "react"
import { graphql } from "gatsby"
import { Row, Container } from "react-bootstrap"
import Banner from "../components/Banner"
import Layout from "../layout/Layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import ScrollAnimation from "react-animate-on-scroll"
// import Modal from "../components/Modal"

const IndexPage = props => {
  const [front, setFront] = useState(false)
  const [back, setBack] = useState(false)
  return (
    <Layout>
      <SEO title="Home" />
      <Banner
        img={props.data.image1.childImageSharp.fluid}
        title="2Taps Winebar"
        subHeader={`Nestled in the heart of Belfast, boasting one of Belfast's largest
              outdoor dining experiences.
              2Taps is the perfect place to meet, relax, share food and soak up
              the atmosphere`}
      />
      <div className="inner_page">
        <ScrollAnimation animateIn="fadeInUp">
          <Container className="inner_page_section p-5">
            <p>
              To Our Beloved Guests, Following up on our last statement, we
              would like to make a brief announcement to all our patrons,
              friends and extended family.{" "}
            </p>
            <p>
              Having decided to close temporarily while we underwent full
              decontamination throughout the restaurant and test screening of
              staff for COVID-19, we can confirm now that the majority of our
              entire team have received negative test results, but unfortunately
              a small number have tested positive.
            </p>
            <p>
              In light of this, with deep regret we have decided to extend our
              closure in order to allow all staff to follow a recommended full
              period of self-isolation lasting 14-days, so that we can keep the
              public safe, but equally as important so that we can return as a
              whole team together.
            </p>
            <p>
              We would like to apologise to everyone with upcoming bookings this
              will affect, and also confess that we are just as devastated at
              having to disrupt the plans of others as we are at our own lives
              disrupted, but it is the right thing to do.
            </p>
            <p>
              If you have any queries about rescheduling reservations, you can
              reach us by email: info@2taps-winebar.com we will try to respond
              to everyone as quickly as we can.
            </p>
            <p>Stay safe,</p>
            <p>2Taps Team</p>
          </Container>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp">
          <Container className="inner_page_section">
            <Row className="justify-content-md-center my-5">
              <div className="col-lg-10 col-sm-10">
                <Img
                  fluid={props.data.image2.childImageSharp.fluid}
                  loading="lazy"
                  style={{ position: "static" }}
                />
              </div>
            </Row>
          </Container>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp">
          <Container className="inner_page_section">
            <Row className="my-5" style={{ height: "80vh" }}>
              <Img
                fluid={props.data.image3.childImageSharp.fluid}
                loading="lazy"
                style={{ position: "static" }}
              />
            </Row>
          </Container>
        </ScrollAnimation>
        {/* 
        <ScrollAnimation animateIn="fadeInUp">
          <Container className="inner_page_section">
            <h3 className="my-3 text-center">Cocktail of the Month</h3>
            <Row className="my-5 monthly_cocktails justify-content-center">
              <div className="col-lg-6 ">
                <Img
                  fluid={props.data.march2020.childImageSharp.fluid}
                  loading="lazy"
                  imgStyle={{ objectFit: "contain" }}
                />
                <h3 className="my-3 text-center">Emerald Breeze</h3>
                <p className="text-center">
                  Coconut tequila, melon liqueur, peach syrup, fresh lime juice
                  topped with lemonade
                </p>
              </div>
            </Row>
          </Container>
        </ScrollAnimation> */}
      </div>
    </Layout>
  )
}

export default IndexPage

export const indexImage = graphql`
  fragment indexImage on File {
    childImageSharp {
      fluid(maxWidth: 2400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageImage = graphql`
  fragment pageImage on File {
    childImageSharp {
      fluid(maxWidth: 1200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
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
    septemberDeal: file(relativePath: { eq: "septemberDeal.jpg" }) {
      ...indexImage
    }
  }
`
