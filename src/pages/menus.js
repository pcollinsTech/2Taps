import React from "react"
import { graphql } from "gatsby"
import Banner from "../components/Banner"
import Layout from "../layout/Layout"
import SEO from "../components/seo"
import Menu from "../components/Menus/Menu"

const MenusPage = props => {
  return (
    <Layout>
      <SEO title="Menus" />
      <Banner img={props.data.tapasTrays.childImageSharp.fluid} title="Menus" />
      <Menu />
    </Layout>
  )
}

export default MenusPage

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
    tapasTrays: file(relativePath: { eq: "tapasTray6.jpg" }) {
      ...menuImage
    }
  }
`
