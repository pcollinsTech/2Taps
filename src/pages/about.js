import React from "react"
import { graphql } from "gatsby"
import { Row, Container } from "react-bootstrap"
import Banner from "../components/Banner"
import Layout from "../layout/Layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const AboutPage = props => {
  return (
    <Layout>
      <SEO title="About" />
      <Banner img={props.data.image1.childImageSharp.fluid} title="About" />
      <div className="inner_page">
        <Container className="about inner_page_section">
          <Row className="px-5 text-center">
            <p>
              We are a family run business in the heart of Belfast Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Nemo ad iusto
              molestiae nesciunt assumenda, reiciendis quasi unde libero veniam,
              soluta atque veritatis, saepe aspernatur dolore magni! Maxime
              aperiam excepturi fuga!
            </p>
          </Row>
        </Container>
        <Container className="about inner_page_section">
          <Row>
            <div className="col-sm-4">
              <Img fluid={props.data.hollumi.childImageSharp.fluid} />
            </div>
            <div className="col-sm-4">
              <Img fluid={props.data.beef.childImageSharp.fluid} />
            </div>
            <div className="col-sm-4">
              <Img fluid={props.data.cheers.childImageSharp.fluid} />
            </div>
            <div className="col-sm-6">
              <Img fluid={props.data.seabass.childImageSharp.fluid} />
            </div>
            <div className="col-sm-6">
              <Img fluid={props.data.dogs.childImageSharp.fluid} />
            </div>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export default AboutPage

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
      fluid(maxWidth: 650) {
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
    hollumi: file(relativePath: { eq: "hollumi.jpg" }) {
      ...foodImage
    }
    beef: file(relativePath: { eq: "beef.jpg" }) {
      ...foodImage
    }
    cheers: file(relativePath: { eq: "cheers.jpg" }) {
      ...foodImage
    }
    dogs: file(relativePath: { eq: "dogs.jpg" }) {
      ...foodImage
    }
    seabass: file(relativePath: { eq: "seabass.jpg" }) {
      ...foodImage
    }
  }
`
