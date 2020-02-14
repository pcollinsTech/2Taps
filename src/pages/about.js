import React from "react"
import { graphql } from "gatsby"
import { Row, Container } from "react-bootstrap"
import Banner from "../components/Banner"
import Layout from "../layout/Layout"
import SEO from "../components/seo"
import hollumi from "../assets/images/hollumi.jpg"
import beef from "../assets/images/beef.jpg"
import cheers from "../assets/images/cheers.jpg"
import dogs from "../assets/images/dogs.jpg"
import seabass from "../assets/images/seabass.jpg"
const AboutPage = props => {
  console.log("PROPS", props)
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
              <img src={hollumi} alt="" />
            </div>
            <div className="col-sm-4">
              <img src={beef} alt="" />
            </div>
            <div className="col-sm-4">
              <img src={cheers} alt="" />
            </div>
            <div className="col-sm-6">
              <img src={seabass} alt="" />
            </div>
            <div className="col-sm-6">
              <img src={dogs} alt="" />
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
