import React from "react"
import { FaStar } from "react-icons/fa"

export const generateStars = (rating: number) => {
  const stars = []

  for (let index = 0; index < rating; index++) {
    stars.push(
      <li className="py-1 pr-2">
        <FaStar />
      </li>
    )
  }

  return stars
}
