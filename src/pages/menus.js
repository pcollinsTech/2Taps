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
      <Banner img={props.data.tapasTrays.childImageSharp.fluid} />
      <Menu />
    </Layout>
  )
}

export default MenusPage

export const query = graphql`
  query {
    tapasTrays: file(relativePath: { eq: "hollumi.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
