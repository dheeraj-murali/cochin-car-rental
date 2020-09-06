import React from "react"
import Img from "gatsby-image/withIEPolyfill"

export const CarCard = (props: CarCardProps) => {
  const { title, banner, seats, tags, type } = props

  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      style={{
        width: "30rem",
      }}
    >
      <div
        className="w-full"
        style={{
          height: "15rem",
        }}
      >
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
          <p className="bg-wineDark text-sm text-white p-3 rounded-lg">
            {seats} seats
          </p>
        </div>
        <h2 className="p-3 text-wineDark">{type}</h2>

        <ul className="flex flex-wrap p-3">
          {tags &&
            tags.map((tag, index) => (
              <li key={`${index}_tag`} className="py-1 pr-2">
                <p className="bg-wineDark text-white p-2 rounded-full text-xs">
                  {tag}
                </p>
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
