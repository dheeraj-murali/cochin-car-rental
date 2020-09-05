import React from "react"
import { Link } from "../"

export const Nav = () => {
  return (
    <nav className="text-white lg:w-1/2">
      <ul className="inline-flex w-full justify-between">
        <li className="m-3 md:m-4">
          <Link to="#About" text="About" />
        </li>
        <li className="m-3 md:m-4">
          <Link to="#Fleet" text="Fleet" />
        </li>
        <li className="m-3 md:m-4">
          <Link to="#Contact" text="Contact" />
        </li>
      </ul>
    </nav>
  )
}
