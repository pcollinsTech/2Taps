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
            <p>To our Most Excellent Customers,</p>
            <p>
              After having to close due to positive cases in our establishment
              13-14th September we have been taking all measurements and advice
              on closing for over 14 days as extra precaution, with our premises
              being deep cleaned immediately after closure.
            </p>
            <p>
              We are more than thrilled to announce that we are reopening
              Wednesday 30th September!
            </p>
            <p>
              With the latest restrictions our maximum table size will be 6,
              with enough notice we can still accommodate large parties with
              split tables along with all procedures we will be very cautious.
              We will aim to keep our dining experience as ‘normal’ and
              enjoyable as possible for you all, but we ask that we all work
              together and respect the regulations we have all been given.
            </p>
            <p>
              We know our hospitality neighbours and friends will unite and work
              hard on keeping this industry alive and kicking through this
              storm.
            </p>
            <p>
              The 2Taps family want to thank each and every one of you for all
              your supportive messages and comments over the last two weeks and
              the general support we feel from you as we all ride through this
              strange time ❤️
            </p>
            <p>
              Excited to get back and open our home to you once again, see you
              Wednesday!
            </p>
            <p>Love</p>
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
