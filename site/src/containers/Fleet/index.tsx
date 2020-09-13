import { graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import { CarCard, Title } from "../../components"
import { config } from "../../config/fleets"
import { Modal } from "../Modal"

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
              fluid(quality: 80) {
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

  const [isOpen, setIsOpen] = useState(false)
  const [category, setCategory] = useState("")

  const handleClick = (member: string) => {
    setCategory(member)
    setIsOpen(!isOpen)
  }

  return (
    <section
      id="Fleet"
      className="flex flex-col justify-around py-20 md:p-5 w-screen bg-cover"
      style={{
        backgroundImage: `url(${data.file.childImageSharp.fluid.src})`,
      }}
    >
      <Title>Meet our fleet</Title>

      <div className="flex">
        <ul className="inline-flex flex-wrap justify-center">
          {fleets.map((fleet, index) => (
            <li
              key={`${index}_fleet`}
              className="md:w-2/5 lg:w-1/3 my-5 mx-3 md:mx-5"
            >
              <CarCard {...fleet} onClick={handleClick} />
            </li>
          ))}
        </ul>
      </div>

      <Modal isOpen={isOpen} onClick={handleClick} category={category} />
    </section>
  )
}
