import React from "react"
import { FcGoogle } from "react-icons/fc"
import { generateStars } from "../../helpers/generateStars"
import { getInitials } from "../../helpers/getInitials"

export const ReviewCard = (props: ReviewCardProps) => {
  const { message, name, rating, time, image } = props

  return (
    <div className="relative max-w-sm overflow-hidden">
      <div className="mt-10 flex flex-col justify-center items-center w-full p-4 bg-white rounded-lg shadow-lg ">
        <div className="absolute flex justify-center items-center overflow-hidden top-0 w-24 h-24 rounded-full bg-wineDark shadow border-2 border-white">
          <p className="text-4xl text-white text-center">{getInitials(name)}</p>
        </div>

        <ul className="inline-flex mt-10 p-3 text-orange-500">
          {generateStars(rating)}
        </ul>

        <h2 className="text-xl text-center">{name}</h2>

        <h2 className="p-3 text-center text-sm font-light">{message}</h2>

        <span className="m-3 text-3xl">
          <FcGoogle />
        </span>
      </div>
    </div>
  )
}

declare interface ReviewCardProps {
  name: string
  image?: any
  message: string
  rating: number
  time: string
}
