import React from "react"
import { Title } from "../../components"
import { config } from "../../config/about"

export const About = () => {
  return (
    <section
      id="About"
      className="w-screen flex justify-center py-20 p-5 bg-white"
    >
      <article className="flex flex-col justify-center items-center max-w-4xl">
        <Title black>{config.title}</Title>
        <p className="text-center mb-10 whitespace-pre-line">
          {config.content}
        </p>
      </article>
    </section>
  )
}
