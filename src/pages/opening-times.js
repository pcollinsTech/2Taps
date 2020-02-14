import React from "react"
import { graphql } from "gatsby"
import { Row, Container } from "react-bootstrap"
import Banner from "../components/Banner"
import Layout from "../layout/Layout"
import SEO from "../components/seo"
import { FaMapSigns } from "react-icons/fa"
import ScrollAnimation from "react-animate-on-scroll"
import Gmap from "../components/Gmap"

const OpeningTimesPage = props => {
  return (
    <Layout>
      <SEO title="Opening Times" />
      <Banner
        img={props.data.image1.childImageSharp.fluid}
        title="Opening Times"
      />
      <div className="inner_page">
        <ScrollAnimation animateIn="fadeInUp">
          <Container className="inner_page_section">
            <Row className="justify-content-md-center">
              <div className="text-center col-lg-10 col-sm-12">
                <h4>Regular Hours</h4>
                <br />
                <p>
                  Tuesday-Thursday 12:00 - 21:30
                  <br />
                  Friday &amp; Saturday 12:00 - 21:30
                </p>
              </div>
            </Row>
          </Container>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp">
          <Container className="inner_page_section">
            <Row className="justify-content-md-center">
              <div className="text-center col-lg-10 col-sm-12">
                <FaMapSigns />
                <h4>42 Waring Street</h4>
                <p>
                  Cotton Court
                  <br />
                  Cathedral Quarter
                  <br />
                  Belfast
                  <br />
                  BT1 2ED
                </p>
              </div>
            </Row>
          </Container>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp">
          <Container className="inner_page_section">
            <Row className="justify-content-md-center">
              <Gmap />
            </Row>
          </Container>
        </ScrollAnimation>
      </div>
    </Layout>
  )
}

export default OpeningTimesPage

export const aboutImage = graphql`
  fragment aboutImage on File {
    childImageSharp {
      fluid(maxWidth: 2400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const foodImage = graphql`
  fragment foodImage on File {
    childImageSharp {
      fluid(maxWidth: 450, maxHeight: 290) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
export const query = graphql`
  query {
    image1: file(relativePath: { eq: "outside1.jpg" }) {
      ...aboutImage
    }
  }
`
