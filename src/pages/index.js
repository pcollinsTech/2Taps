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
  // const [open, setOpen] = useState(true)
  return (
    <Layout>
      <SEO title="Home" />
      <Banner
        img={props.data.image1.childImageSharp.fluid}
        title="2Taps"
        subHeader={`Nestled in the heart of Belfast, boasting one of Belfast's largest
              outdoor dining experiences.
              2Taps is the perfect place to meet, relax, share food and soak up
              the atmosphere`}
      />
      {/* {/* <Modal show={open} onClose={setOpen}>
        Here's some content for the modal
      </Modal> */}
      <ScrollAnimation animateIn="fadeInUp">
        <Container className="inner_page">
          <Row className="justify-content-md-center my-5">
            <q className="text-center col-8">
              Nestled in the heart of Belfast, boasting one of Belfast's largest
              outdoor dining experiences. <br />
              <br />
              2Taps is the perfect place to meet, relax, share food and soak up
              the atmosphere.
            </q>
            <div className="col-8">
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
        <Container className="inner_page">
          <Row className="my-5">
            <div className="col-6 text-center py-5">
              <h3>About</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                reiciendis consequatur, dolores alias, ab necessitatibus,
                mollitia voluptatum harum impedit voluptatem doloribus quod!
                Provident, ea repellat pariatur accusamus reiciendis
                necessitatibus rem?
              </p>
              <button className="btn btn-primary">Learn More</button>
            </div>
            <div className="col-6">
              <Img
                fluid={props.data.image3.childImageSharp.fluid}
                loading="lazy"
                style={{ position: "static" }}
              />
            </div>
          </Row>
        </Container>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp">
        <Container className="inner_page">
          <Row className="my-5">
            <div className="col-6">
              <Img
                fluid={props.data.image3.childImageSharp.fluid}
                loading="lazy"
                style={{ position: "static" }}
              />
            </div>
            <div className="col-6 text-center py-5">
              <h3>About</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                reiciendis consequatur, dolores alias, ab necessitatibus,
                mollitia voluptatum harum impedit voluptatem doloribus quod!
                Provident, ea repellat pariatur accusamus reiciendis
                necessitatibus rem?
              </p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </Row>
        </Container>
      </ScrollAnimation>
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
      fluid(maxWidth: 700) {
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
    image2: file(relativePath: { eq: "fishPaella.jpg" }) {
      ...pageImage
    }
    image3: file(relativePath: { eq: "tapasTray6.jpg" }) {
      ...pageImage
    }
  }
`
