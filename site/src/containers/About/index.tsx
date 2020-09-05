import React from "react"
import { Title } from "../../components"
import { config } from "../../config/about"

export const About = () => {
  return (
    <section
      id="About"
      className="w-screen flex-col justify-center px-5 bg-white"
    >
      <div className="mx-auto lg:w-1/2 py-10">
        <Title black>{config.title}</Title>
        <p className="text-center mb-10">{config.content}</p>
      </div>
    </section>
  )
}
