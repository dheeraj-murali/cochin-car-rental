import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import React, { useRef } from "react"
import { ReviewCard, Scroll, Title } from "../../components"
import { scroll } from "../../helpers/scroll"
import { config } from "../../config/review"

export const Reviews = () => {
  const container = useRef<HTMLDivElement>(null!)

  const data = useStaticQuery(graphql`
    query ReviewImage {
      file(relativePath: { eq: "images/review.jpg" }) {
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
    <section
      id="Package"
      className="w-screen h-screen flex flex-col justify-center items-center"
      style={{
        minHeight: "35rem",
      }}
    >
      <Img
        fluid={data.file.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        className="w-full h-full opacity-50"
        alt="Awesome picture of cars in showroom"
      />

      <div
        className="flex flex-col justify-center items-center absolute w-full h-full"
        style={{ minHeight: "35rem" }}
      >
        <Title>What our customers are saying</Title>

        <div
          ref={container}
          className="w-full overflow-scroll no-scroll-bar m-2"
        >
          <ul className="inline-flex lg:ml-64">
            {config.map((review, index) => (
              <li
                key={`${index}_review`}
                className="m-5 w-1/3"
                style={{ minWidth: "18rem" }}
              >
                <ReviewCard {...review} />
              </li>
            ))}
          </ul>
        </div>
        <Scroll
          leftClickFn={() => scroll(container, 350, "l")}
          rightClickFn={() => scroll(container, 350, "r")}
        />
      </div>
    </section>
  )
}
