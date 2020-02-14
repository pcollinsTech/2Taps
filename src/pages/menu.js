import React from "react"
import { graphql } from "gatsby"
import { Row, Container } from "react-bootstrap"
import Banner from "../components/Banner"
import Layout from "../layout/Layout"
import SEO from "../components/seo"
import Menu from "../components/Menu.js/Menu"

const MenuPage = props => {
  console.log("PROPS", props)

  const menuImages = {
    dessert: props.data.dessert.childImageSharp.fluid,
    meat: props.data.meat.childImageSharp.fluid,
    vegetarian: props.data.vegetarian.childImageSharp.fluid,
  }
  return (
    <Layout>
      <SEO title="Menus" />
      <Banner img={props.data.tapasTrays.childImageSharp.fluid} title="Menus" />
      <Menu images={menuImages} />
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
    tapasTrays: file(relativePath: { eq: "tapasTray6.jpg" }) {
      ...menuImage
    }
    dessert: file(relativePath: { eq: "cremeBrule.jpg" }) {
      ...pageImage
    }
    meat: file(relativePath: { eq: "chorizoPan.jpg" }) {
      ...pageImage
    }
    vegetarian: file(relativePath: { eq: "goatsCheese.jpg" }) {
      ...pageImage
    }
  }
`
