import React from "react"
import { Logo, Nav } from "../../components"

export const Header = () => {
  return (
    <header className="w-screen text-xl inline-flex justify-start items-center px-3">
      <div className="ml-0 md:ml-10 lg:ml-24">
        <Logo />
      </div>
      <div className="flex flex-grow justify-center">
        <Nav />
      </div>
    </header>
  )
}
