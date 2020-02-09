import React from "react"
import { graphql } from "gatsby"
import { Row, Container } from "react-bootstrap"
import Banner from "../components/Banner"
import Layout from "../layout/Layout"
import SEO from "../components/seo"
import Menu from "../components/Menu.js/Menu"

const MenuPage = props => {
  console.log("PROPS", props)
  return (
    <Layout>
      <SEO title="Menus" />
      <Banner img={props.data.image1.childImageSharp.fluid} title="Menus" />
      <Container>
        <Row>
          <Menu />
        </Row>
      </Container>
    </Layout>
  )
}

export default MenuPage

export const menuImage = graphql`
  fragment menuImage on File {
    childImageSharp {
      fluid(maxWidth: 2400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
export const query = graphql`
  query {
    image1: file(relativePath: { eq: "tapasTray6.jpg" }) {
      ...menuImage
    }
  }
`
