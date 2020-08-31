import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Loadable from "react-loadable"
import {
  Banner,
  About,
  Banner2,
  Destination,
  Banner3,
  Footer,
  Layout,
} from "../components"
import { MetaData } from "../components/meta"
import { SSS } from "../func/nada"
import { useUsuario, UsuarioProvider } from "../func/store"

const HOME = ({ data, location }) => {
  const FINISHDATA = SSS(
    data.markdownRemark.frontmatter.content,
    data.allCloudinaryMedia.edges
  )

  return (
    <UsuarioProvider>
      <Layout>
        <MetaData image={FINISHDATA.banner.img} location={location} />

        <Banner data={FINISHDATA.banner} />
        <About data={FINISHDATA.about} />
        <Banner2 data={FINISHDATA.banner2} />
        <Destination data={FINISHDATA.destination} />
        <Banner3 data={FINISHDATA.banner3} />
        <Footer />
      </Layout>
    </UsuarioProvider>
  )
}
export default HOME

export const postQuery = graphql`
  query MyQuery {
    markdownRemark(frontmatter: { path: { eq: "/" } }) {
      id
      frontmatter {
        path
        content {
          banner {
            id
            img
            box {
              h2
              p
            }
          }
          about {
            id
            img
            box {
              h2
              p
            }
          }
          banner2 {
            img
          }
          destination {
            box {
              h2
              p
            }
            destinationList {
              img
              content {
                h2
                span
              }
            }
          }
          banner3 {
            img
          }
        }
      }
    }
    allCloudinaryMedia {
      edges {
        node {
          id
          secure_url
          public_id
        }
      }
    }
  }
`
