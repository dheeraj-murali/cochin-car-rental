import React from "react"
import Img from "gatsby-image/withIEPolyfill"
import { Badge } from "../"

export const CarCard = (props: CarCardProps) => {
  const { title, banner, seats, tags, type } = props

  return (
    <div className="bg-white max-w-sm md:max-w-lg rounded-lg shadow-lg overflow-hidden">
      <div className="w-full md:h-48">
        <Img
          fluid={banner}
          objectFit="cover"
          objectPosition="50% 50%"
          className="w-full h-full"
          alt="Awesome picture os cars in showroom"
        />
      </div>

      <div className="w-full p-3">
        <div className="flex justify-between items-center w-full px-3">
          <h2 className="text-xl font-medium">{title}</h2>

          <Badge big>{seats} seats</Badge>
        </div>

        <h2 className="p-3 text-wineDark">{type}</h2>

        <ul className="flex flex-wrap p-3">
          {tags &&
            tags.map((tag, index) => (
              <li key={`${index}_tag`} className="py-1 pr-2">
                <Badge>{tag}</Badge>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

declare interface CarCardProps {
  id: number
  title: String
  type: String
  seats: String
  tags: String[]
  banner: any
}
