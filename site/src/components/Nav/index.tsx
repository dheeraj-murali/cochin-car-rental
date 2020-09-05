import React from "react"
import { Link } from "../"

export const Nav = () => {
  return (
    <nav className="text-white lg:w-1/2">
      <ul className="inline-flex w-full justify-between">
        <li className="m-2 md:m-4">
          <Link to="#About">About</Link>
        </li>
        <li className="m-2 md:m-4">
          <Link to="#Fleet">Fleet</Link>
        </li>
        <li className="m-2 md:m-4">
          <Link to="#Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}
