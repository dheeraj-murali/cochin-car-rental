import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import React from "react"
import { Link } from "../../components"
import { config } from "../../data/config/hero"

export const Hero = () => {
  const data = useStaticQuery(graphql`
    query HeroImage {
      file(relativePath: { eq: "images/hero.jpg" }) {
        id
        childImageSharp {
          fluid(jpegQuality: 80) {
            aspectRatio
            base64
            sizes
            src
            srcSet
            srcSetWebp
            srcWebp
          }
        }
      }
    }
  `)

  return (
    <main
      className="flex w-screen h-screen text-white bg-gradient-to-r from-wineDark to-black"
      style={{ minHeight: "25rem" }}
    >
      <Img
        fluid={data.file.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        className="w-full h-full"
        alt="Awesome picture of cars in showroom"
      />

      <div
        className="flex flex-col justify-center absolute w-full h-full p-3 md:p-20 lg:p-40"
        style={{ minHeight: "25rem" }}
      >
        <div>
          <h1 className="text-5xl md:6xl whitespace-pre-line">
            {config.title}
          </h1>

          <p className="font-light py-4">{config.subtitle}</p>
        </div>

        <Link
          className="p-3 px-10 w-48 bg-transparent border rounded-lg hover:bg-black focus:bg-black text-white lg:mt-10"
          to="#About"
        >
          Find out more
        </Link>
      </div>
    </main>
  )
}
