import React from "react"
import { graphql } from "gatsby"
import { Row, Container } from "react-bootstrap"
import Banner from "../components/Banner"
import Layout from "../layout/Layout"
import SEO from "../components/seo"
import ScrollAnimation from "react-animate-on-scroll"

const ReservationsPage = props => {
  console.log("PROPS", props)
  return (
    <Layout>
      <SEO title="Menus" />
      <Banner
        img={props.data.image1.childImageSharp.fluid}
        title="Reservations"
      />
      <ScrollAnimation animateIn="fadeInUp">
        <Container className="inner_page">
          <Row className="justify-content-md-center my-5">
            <div className="text-center col-10">
              <h2>OPENTABLE Iframe</h2>
            </div>
          </Row>
        </Container>
      </ScrollAnimation>
    </Layout>
  )
}

export default ReservationsPage

export const menuImage = graphql`
  fragment menuImage on File {
    childImageSharp {
      fluid(maxWidth: 2400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
export const query = graphql`
  query {
    image1: file(relativePath: { eq: "banner.jpg" }) {
      ...menuImage
    }
  }
`
