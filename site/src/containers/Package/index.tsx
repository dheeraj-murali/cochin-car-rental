import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import React from "react"
import { Link, Title, PackageCard } from "../../components"
import { config } from "../../config/package"

export const Package = () => {
  const data = useStaticQuery(graphql`
    query packageImages {
      allFile(
        filter: {
          extension: { regex: "/(jpg)/" }
          name: { regex: "/(package)/" }
        }
      ) {
        edges {
          node {
            name
            childImageSharp {
              fluid {
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

  const packages = config(data.allFile.edges)

  return (
    <section
      id="Package"
      className="w-screen flex flex-col py-20 px-3 justify-center items-center bg-white"
    >
      <Title black>Seasonal packages</Title>

      <ul className="w-full inline-flex flex-wrap justify-evenly">
        {packages.map((item, index) => (
          <li key={`${index}_packageCards`} className="p-1">
            <PackageCard {...item} />
          </li>
        ))}
      </ul>
    </section>
  )
}
