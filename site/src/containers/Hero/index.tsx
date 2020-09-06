import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import React from "react"
import { Link } from "../../components"
import { config } from "../../config/hero"

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
        <Link to="#About">
          <button className="p-3 px-10 bg-transparent border rounded-lg hover:bg-black text-white lg:mt-10">
            Find out more
          </button>
        </Link>
      </div>
    </main>
  )
}
