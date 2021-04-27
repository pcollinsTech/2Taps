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
        img={props.data.image3.childImageSharp.fluid}
        subHeader={`2Taps Winebar & Restaurant - From the heart of Belfast’s Cathedral Quarter, 
        boasting one of the city’s largest outdoor terraces, 2Taps creates all the atmosphere 
        of summer regardless of the season. Welcoming family, friends, and admirers from across 
        the world, 2Taps is a holiday and a home in one.
        `}
      />
      <div className="inner_page">
        
        <ScrollAnimation animateIn="fadeInUp">
          <Container className="inner_page_section bg_red">
            <Row className="justify-content-md-center my-5 py-5" style={{ height: "60vh" }}>
                <Img
                  fluid={props.data.image2.childImageSharp.fluid}
                  loading="lazy"
                  style={{ position: "static" }}
                />
            </Row>
          </Container>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp">
          <Container className="inner_page_section ">
            <Row className="justify-content-md-center my-5" style={{ height: "60vh" }}>
              <Img
                fluid={props.data.image1.childImageSharp.fluid}
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


export const aboutImage = graphql`
  fragment aboutImage on File {
    childImageSharp {
      fluid(maxWidth: 2400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
export const query = graphql`
  query {
    image1: file(relativePath: { eq: "cheers.jpeg" }) {
      ...indexImage
    }
    image2: file(relativePath: { eq: "outfront.jpeg" }) {
      ...pageImage
    }
    image3: file(relativePath: { eq: "hollumi.jpg" }) {
      ...indexImage
    }
    march2020: file(relativePath: { eq: "paela.jpg" }) {
      ...aboutImage
    }
    septemberDeal: file(relativePath: { eq: "2Taps-81.jpg" }) {
      ...indexImage
    }
  }
`
