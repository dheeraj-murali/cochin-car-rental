import React from "react"
import { FaStar } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"

export const ReviewCard = () => {
  return (
    <div className="relative max-w-sm overflow-hidden">
      <div className="mt-10 flex flex-col justify-center items-center w-full p-3 bg-white rounded-lg shadow-lg ">
        <div className="absolute top-0 w-24 h-24 rounded-full bg-white shadow border-2 border-wineDark"></div>

        <ul className="inline-flex mt-10 p-3 text-orange-500">
          <li className="py-1 pr-2">
            <FaStar />
          </li>
          <li className="py-1 pr-2">
            <FaStar />
          </li>
          <li className="py-1 pr-2">
            <FaStar />
          </li>
        </ul>

        <h2 className="text-xl">Reviewer Name</h2>

        <h2 className="p-3 text-center text-sm font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          facilis vitae repellendus, officia, dolor facere quod aspernatur
          adipisci culpa accusamus esse vel rem magni cum quis sint! Nulla,
          expedita earum!
        </h2>

        <span className="m-3 text-3xl">
          <FcGoogle />
        </span>
      </div>
    </div>
  )
}

// declare interface ReviewCardProps {
//   name: String
//   image: any
//   review: String
//   rating: number
// }
