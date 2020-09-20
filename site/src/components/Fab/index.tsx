import React, { useState } from "react"
import { FaWhatsapp } from "react-icons/fa"
import { Badge } from "../Badge"

export const Fab = (props: FabProps) => {
  const { link } = props

  const [showTip, setShowTip] = useState(false)

  return (
    <div className="fixed bottom-0 right-0 inline-flex items-start m-5 lg:m-10">
      {showTip && <Badge>Chat with us</Badge>}
      <a
        onMouseEnter={() => setShowTip(true)}
        onMouseLeave={() => setShowTip(false)}
        onFocus={() => setShowTip(true)}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-auto text-3xl lg:text-4xl rounded-full shadow-lg text-white p-3 bg-green-600 hover:bg-green-900 cursor-pointer"
      >
        <FaWhatsapp />
      </a>
    </div>
  )
}

declare interface FabProps {
  link: string
}
