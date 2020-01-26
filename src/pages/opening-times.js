import React from "react"
import { graphql } from "gatsby"
import { Row, Container } from "react-bootstrap"
import Banner from "../components/Banner"
import Layout from "../layout/Layout"
import SEO from "../components/seo"
import hollumi from "../assets/images/hollumi.jpg"
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
          <h1>Opening Times</h1>
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
