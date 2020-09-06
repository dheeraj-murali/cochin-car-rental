import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { CarCard, Title } from "../../components"

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
              }
            }
          }
        }
      }
    }
  `)

  const fleetItems = data.allFile.edges
    .map(image => {
      const name = image.node.name
      const banner = image.node.childImageSharp.fluid

      if (name === "fleet1") {
        return {
          title: `Standard Class`,
          type: `Hatchbacks / Sedans`,
          seats: `4`,
          tags: [
            "AC",
            "24 Hr customer service",
            "charged per day",
            "safety",
            "Road side assistance",
          ],
          banner,
          id: 1,
        }
      }

      if (name === "fleet2") {
        return {
          title: `Business Class`,
          type: `Sedans`,
          seats: `4`,
          tags: [
            "AC",
            "24 Hr customer service",
            "charged per day",
            "safety",
            "Road side assistance",
          ],
          banner,
          id: 2,
        }
      }

      if (name === "fleet3") {
        return {
          title: `Family Class`,
          type: `SUV / Traveller`,
          seats: `4 - 12`,
          tags: [
            "AC",
            "24 Hr customer service",
            "charged per day",
            "safety",
            "Road side assistance",
          ],
          banner,
          id: 3,
        }
      }

      if (name === "fleet4") {
        return {
          title: `Bus Class`,
          type: `Bus / Mini bus`,
          seats: `12 - 24`,
          tags: [
            "AC",
            "24 Hr customer service",
            "charged per day",
            "safety",
            "Road side assistance",
          ],
          banner,
          id: 4,
        }
      }
    })
    .sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0))

  return (
    <section
      id="Fleet"
      className="flex w-screen bg-cover"
      style={{
        backgroundImage: `url(${data.file.childImageSharp.fluid.src})`,
      }}
    >
      <div className="w-screen flex flex-col justify-around py-5 pl-5 md:pr-5">
        <Title>Our fleet</Title>

        <div className="flex overflow-scroll">
          <ul className="inline-flex lg:flex-wrap lg:justify-center">
            {fleetItems.map((fleet, index) => (
              <li key={`${index}_fleet`} className="m-5">
                <CarCard {...fleet} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
