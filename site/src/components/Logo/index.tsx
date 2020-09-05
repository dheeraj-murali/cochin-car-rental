import React from "react"
import { FaCar } from "react-icons/fa"

export const Logo = () => {
  return (
    <div className="p-2 w-16 text-white hover:bg-black text-sm">
      Cochin
      <br />
      Car <FaCar className="inline" />
      <br />
      Rental
    </div>
  )
}
