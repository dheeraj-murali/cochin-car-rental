import React from "react"
import { FaWhatsapp } from "react-icons/fa"

export const Fab = (props: FabProps) => {
  const { link } = props
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-0 right-0 m-5 text-3xl lg:m-10 lg:text-4xl rounded-full shadow-lg text-white p-3 bg-green-600 hover:bg-green-900 cursor-pointer"
    >
      <FaWhatsapp />
    </a>
  )
}

declare interface FabProps {
  link: string
}
