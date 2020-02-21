import React from "react"
import Banner from "../components/Banner"
import { graphql } from "gatsby"
import Layout from "../layout/Layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Banner
      img={props.data.image1.childImageSharp.fluid}
      title="This Page Does Not Exist"
    />
  </Layout>
)

export default NotFoundPage

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "bannerOne.jpg" }) {
      ...indexImage
    }
  }
`
