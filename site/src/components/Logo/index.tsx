import React from "react"
import { FaCar } from "react-icons/fa"

export const Logo = () => {
  return (
    <div className="p-2 w-20 h-24 text-white hover:bg-wineDark">
      Cochin
      <br />
      Car <FaCar className="inline" />
      <br />
      Rental
    </div>
  )
}
