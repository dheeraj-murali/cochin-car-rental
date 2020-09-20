import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import React from "react"

export const NotFound = () => {
  const data = useStaticQuery(graphql`
    query NotFoundImage {
      file(relativePath: { eq: "images/404.jpg" }) {
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
      className="flex w-screen h-screen text-white bg-gradient-to-b from-wineDark to-black"
      style={{ minHeight: "25rem" }}
    >
      <Img
        fluid={data.file.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        className="w-full h-full opacity-50"
        alt="Awesome picture of cars in showroom"
      />

      <div
        className="flex flex-col justify-center items-center absolute w-full h-full p-3 md:p-20 lg:p-40"
        style={{ minHeight: "25rem" }}
      >
        <div>
          <h1 className="text-6xl font-extrabold md:6xl whitespace-pre-line">
            Page Not Found
          </h1>
        </div>

        <a
          className="p-3 px-10 bg-transparent border rounded-lg hover:bg-black text-white lg:mt-10"
          href="/"
        >
          Go back
        </a>
      </div>
    </main>
  )
}
