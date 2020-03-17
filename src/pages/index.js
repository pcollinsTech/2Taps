import React from "react"
import { graphql } from "gatsby"
import { Row, Container } from "react-bootstrap"
import Banner from "../components/Banner"
import Layout from "../layout/Layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import ScrollAnimation from "react-animate-on-scroll"
// import Modal from "../components/Modal"

const IndexPage = props => {
  console.log("Props", props)
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
      {/* {/* <Modal show={open} onClose={setOpen}>
        Here's some content for the modal
      </Modal> */}
      <div className="inner_page">
        <ScrollAnimation animateIn="fadeInUp">
          <Container className="inner_page_section">
            <Row className="justify-content-md-center my-5">
              <div className="col-lg-10 col-sm-10 text-center">
                <p>
                  Tapas lovers
                  <br />
                  <br />
                  We have sadly had to make the decision to close our doors
                  until further notice. <br />
                  We have to look after our wonderful customers, staff and
                  friends.
                  <br />
                  We will reopen when it is safe to do so. <br />
                  This is a difficult time for all our hospitality neighbours,
                  but we are remaining as positive as possible! <br />
                  <br />
                  Things <strong>WILL</strong> get better, please stay safe,
                  look after each other and be <strong>KIND!</strong> We will
                  miss seeing you all…
                  <br />
                  <br /> Hopefully not for long x
                </p>
              </div>
            </Row>
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

        <ScrollAnimation animateIn="fadeInUp">
          <Container className="inner_page_section">
            <h3 className="my-3 text-center">Cocktails of the Month</h3>
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
        </ScrollAnimation>
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
    aromaBella: file(relativePath: { eq: "aromaBella.png" }) {
      ...aboutImage
    }
  }
`
