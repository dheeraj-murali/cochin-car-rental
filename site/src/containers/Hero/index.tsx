import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import React from "react"

export const Hero = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "images/hero.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1000, jpegQuality: 80) {
            aspectRatio
            base64
            sizes
            src
            srcSet
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      Tag="section"
      className="w-screen h-screen text-white"
      fluid={data.file.childImageSharp.fluid}
      backgroundColor={`#040e18`}
    >
      <div className="flex items-center w-full h-full">
        <h1 className="">Hire cars, Like never Before</h1>
      </div>
    </BackgroundImage>
  )
}
