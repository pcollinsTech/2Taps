import React from "react"
import { graphql } from "gatsby"
import { Row, Container } from "react-bootstrap"
import Banner from "../components/Banner"
import Layout from "../layout/Layout"
import SEO from "../components/seo"

const IndexPage = props => {
  console.log("PROPS", props)
  return (
    <Layout>
      <SEO title="Home" />
      <Banner img={props.data.image1.childImageSharp.fluid} title="2Taps" />
      <Container>
        <Row></Row>
      </Container>
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
export const query = graphql`
  query {
    image1: file(relativePath: { eq: "bannerOne.jpg" }) {
      ...indexImage
    }
  }
`
