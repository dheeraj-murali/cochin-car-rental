import React from "react"
import Img from "gatsby-image/withIEPolyfill"
import { Link } from "../Link"

export const PackageCard = (props: PackageCardProps) => {
  const { title, content, banner } = props

  return (
    <div
      className="bg-white 
    max-w-full
    lg:max-w-md 
    xl:max-w-full
    flex 
    flex-col 
    md:flex-row
    lg:flex-col
    xl:flex-row
    h-full border rounded-lg shadow-lg  overflow-hidden"
    >
      <div className="w-full h-64 md:h-auto lg:h-64 xl:h-auto">
        <Img
          fluid={banner}
          objectFit="cover"
          objectPosition="50% 50%"
          className="w-full h-full op"
          alt={`${title}`}
        />
      </div>
      <div className="w-full h-full flex flex-col justify-between items-center p-5">
        <h2 className="text-center text-xl mb-5 font-semibold text-wineDark">
          {title}
        </h2>

        <p className="max-w-xl text-sm text-center mb-5 whitespace-pre-line">
          {content}
        </p>

        <Link
          className="p-3 px-10 bg-transparent border border-wineDark text-wineDark rounded-lg hover:bg-black focus:bg-black hover:text-white focus:text-white"
          to="#Contact"
        >
          Book now
        </Link>
      </div>
    </div>
  )
}

declare interface PackageCardProps {
  title: String
  content: String
  banner: any
}
