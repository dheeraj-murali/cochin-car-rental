import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { CarCard, Title } from "../../components"
import { config } from "../../config/fleets"

export const Fleet = () => {
  const data = useStaticQuery(graphql`
    query FleetsAndFleetImage {
      file(relativePath: { eq: "images/fleet.jpg" }) {
        publicURL
        childImageSharp {
          fluid {
            src
          }
        }
      }

      allFile(
        filter: {
          extension: { regex: "/(png)/" }
          name: { regex: "/(fleet)/" }
        }
      ) {
        edges {
          node {
            name
            childImageSharp {
              fluid(pngQuality: 80) {
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
      }
    }
  `)

  const fleets = config(data.allFile.edges)

  return (
    <section
      id="Fleet"
      className="flex flex-col justify-around py-5 pl-5 md:pr-5 w-screen bg-cover bg-gradient-to-b from-black to-wineDark"
      style={{
        backgroundImage: `url(${data.file.childImageSharp.fluid.src})`,
      }}
    >
      <Title>Our fleet</Title>

      <div className="flex overflow-scroll">
        <ul className="inline-flex lg:flex-wrap lg:justify-center">
          {fleets.map((fleet, index) => (
            <li
              key={`${index}_fleet`}
              className="m-5 w-1/3"
              style={{ minWidth: "24rem" }}
            >
              <CarCard {...fleet} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
