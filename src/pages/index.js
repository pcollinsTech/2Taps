import React from "react"
import { graphql, Link } from "gatsby"
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
      <div className="inner_page">
        <ScrollAnimation animateIn="fadeInUp">
          <Container className="inner_page_section">
            <Row className="justify-content-md-center my-5">
              <p className="text-center col-lg-8 col-sm-12">
                At 2Taps we believe... Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Molestiae repudiandae minus eos mollitia,
                totam est earum explicabo numquam voluptatibus eius praesentium
                delectus ducimus. Laudantium rem aperiam eligendi eos quod ad.
              </p>
              <div className="col-lg-8 col-sm-12">
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
            <Row className="my-5">
              <div className="col-lg-6 text-center py-5">
                <h3>About</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet reiciendis consequatur, dolores alias, ab
                  necessitatibus, mollitia voluptatum harum impedit voluptatem
                  doloribus quod! Provident, ea repellat pariatur accusamus
                  reiciendis necessitatibus rem?
                </p>
                <Link to="/about">
                  <button className="btn btn-primary">Learn More</button>
                </Link>
              </div>
              <div className="col-lg-6">
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
          <Container className="inner_page_section">
            <h3 className="my-3 text-center">Cocktails of the Month</h3>
            <Row className="my-5 monthly_cocktails">
              <div className="col-lg-6">
                <h3 className="my-3 text-center">For Her</h3>
                <Img
                  fluid={props.data.aromaBella.childImageSharp.fluid}
                  loading="lazy"
                  imgStyle={{ objectFit: "contain" }}
                />
                <h3 className="my-3 text-center">Aroma Bella</h3>
                <p className="text-center">
                  Sevilla, Passoa, Bitters, Vanilla Syrup, Lime Juice
                </p>
              </div>
              <div className="col-lg-6 ">
                <h3 className="my-3 text-center">For Him</h3>
                <Img
                  fluid={props.data.teaCup.childImageSharp.fluid}
                  loading="lazy"
                  imgStyle={{ objectFit: "contain" }}
                />
                <h3 className="my-3 text-center">Brooklyn Teacup</h3>
                <p className="text-center">
                  Bulleit Bourbon, Maraschino, Chamomile Syrup, Grapefruit
                  bitters
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
    teaCup: file(relativePath: { eq: "brooklynTeaCup.png" }) {
      ...aboutImage
    }
    aromaBella: file(relativePath: { eq: "aromaBella.png" }) {
      ...aboutImage
    }
  }
`
