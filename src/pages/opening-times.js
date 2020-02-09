import React from "react"
import { graphql } from "gatsby"
import { Row, Container } from "react-bootstrap"
import Banner from "../components/Banner"
import Layout from "../layout/Layout"
import SEO from "../components/seo"
import { FaMapSigns } from "react-icons/fa"

const OpeningTimesPage = props => {
  console.log("PROPS", props)
  return (
    <Layout>
      <SEO title="Opening Times" />
      <Banner
        img={props.data.image1.childImageSharp.fluid}
        title="Opening Times"
      />
      <Container>
        <Row>
          <h3>Hours &amp; Location</h3>
          <FaMapSigns />
          <b>42 Waring Street</b>
          Cotton Court
          <br />
          Cathedral Quarter
          <br />
          Belfast
          <br /> BT1 2ED
        </Row>
        <Row>
          <h4>Regular Hours</h4>
          <br />
          <p>Tuesday-Thursday 12:00 - 21:30</p>
          <br />
          <p>Friday &amp; Saturday 12:00 - 21:30</p>
          <br />
        </Row>
      </Container>
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
