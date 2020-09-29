import React from "react"
import { graphql } from "gatsby"
import { Row, Container } from "react-bootstrap"
import Banner from "../components/Banner"
import Layout from "../layout/Layout"
import SEO from "../components/seo"
import { FaMapSigns, FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa"
import ScrollAnimation from "react-animate-on-scroll"
import Gmap from "../components/Gmap"

const OpeningTimesPage = props => {
  return (
    <Layout>
      <SEO title="Opening Times" />
      <Banner
        img={props.data.image1.childImageSharp.fluid}
        title="Opening Times"
      />
      <div className="inner_page">
        <ScrollAnimation animateIn="fadeInUp">
          <Container className="inner_page_section">
            <Row className="justify-content-md-center">
              <div className="text-center col-lg-10 col-sm-12">
                <h3>Regular Hours</h3>
                <br />
                <p>
                  Monday & Tuesday
                  <br />
                  Closed
                  <hr />
                </p>
                <p>
                  Wednesday & Thursday
                  <br />
                  12 - 9.15pm
                  <hr />
                </p>
                <p>
                  Friday & Saturday
                  <br />
                  12 - 9.15pm
                  <hr />
                </p>
                <p>
                  Sunday
                  <br />
                  1 - 9.15pm
                  <hr />
                </p>
              </div>
            </Row>
          </Container>
        </ScrollAnimation>
        {/* <ScrollAnimation animateIn="fadeInUp">
          <Container className="inner_page_section">
            <Row className="justify-content-md-center">
              <Gmap />
            </Row>
          </Container>
        </ScrollAnimation> */}
        <ScrollAnimation animateIn="fadeInUp">
          <Container className="inner_page_section">
            <Row className="justify-content-md-center">
              <div className="col-sm-6 address">
                <a
                  href="https://www.google.com/maps/place/2+Taps+Wine+Bar/@54.6015625,-5.9281421,17z/data=!3m1!4b1!4m5!3m4!1s0x4861085476a93411:0x2b9ee63dc9570a12!8m2!3d54.6015625!4d-5.9259481?hl=en-GB"
                  target="__blank"
                  style={{ color: "black" }}
                >
                  <FaMapSigns />
                  <h4>42 Waring Street</h4>
                  <p>
                    Cotton Court
                    <br />
                    Cathedral Quarter
                    <br />
                    Belfast
                    <br />
                    BT1 2ED
                  </p>
                </a>
              </div>
              <div className="col-sm-6">
                <p>
                  <a
                    href="https://www.facebook.com/2tapswinebar"
                    target="__blank"
                    style={{ color: "black" }}
                  >
                    <FaFacebook /> - Facebook
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.instagram.com/2tapswinebar"
                    target="__blank"
                    style={{ color: "black" }}
                  >
                    <FaInstagram /> - Instagram
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:info@2taps-winebar.com"
                    target="__blank"
                    style={{ color: "black" }}
                  >
                    <FaEnvelope /> - info@2taps-winebar.com
                  </a>
                </p>
              </div>
            </Row>
          </Container>
        </ScrollAnimation>
      </div>
    </Layout>
  )
}

export default OpeningTimesPage

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "outside1.jpg" }) {
      ...aboutImage
    }
  }
`
