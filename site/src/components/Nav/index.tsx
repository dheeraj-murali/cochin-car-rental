import React from "react"
import { Link } from "../"

export const Nav = (props: NavProps) => {
  const { links } = props

  return (
    <nav className="text-white lg:w-1/2">
      <ul className="inline-flex w-full justify-between">
        {links.map((link, index) => (
          <li key={`${index}_nav`} className="m-2 md:m-4">
            <Link className="hover:text-wine focus:text-wine" to={link.to}>
              {link.link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

declare interface NavProps {
  links: { to: string; link: string }[]
}
