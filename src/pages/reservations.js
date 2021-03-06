import React from "react"
import { graphql } from "gatsby"
import { Row, Container } from "react-bootstrap"
import Banner from "../components/Banner"
import Layout from "../layout/Layout"
import SEO from "../components/seo"
import ScrollAnimation from "react-animate-on-scroll"

const ReservationsPage = props => {
  return (
    <Layout>
      <SEO title="Menus" />
      <Banner
        img={props.data.image1.childImageSharp.fluid}
        title="Reservations"
      />
      <div className="inner_page">
        <ScrollAnimation animateIn="fadeInUp">
          <Container className="inner_page_section">
            <Row className="justify-content-md-center my-5">
              <div className="text-center col-sm-8">
                <script
                  type="text/javascript"
                  src="//www.opentable.co.uk/widget/reservation/loader?rid=161271&type=button&theme=standard&iframe=true&domain=couk&lang=en-GB&newtab=true&ot_source=Restaurant%20website"
                ></script>
              </div>
            </Row>
          </Container>
        </ScrollAnimation>
      </div>
    </Layout>
  )
}

export default ReservationsPage

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "outfront.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 2400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
