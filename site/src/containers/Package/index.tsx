import React from "react"
import { Title, Link } from "../../components"
import { config } from "../../config/package"

export const Package = () => {
  return (
    <section id="Package" className="w-screen flex justify-center p-5 bg-white">
      <article className="flex flex-col justify-center items-center max-w-4xl py-10">
        <Title black>{config.title}</Title>

        <h3 className="text-center text-lg mb-5 font-semibold text-wineDark">
          {config.subtitle}
        </h3>

        <p className="max-w-2xl text-center mb-5 whitespace-pre-line">
          {config.content}
        </p>

        <Link
          className="p-3 px-10 bg-transparent border border-wineDark text-wineDark rounded-lg hover:bg-black hover:text-white lg:mt-10"
          to="#Contact"
        >
          Book now
        </Link>
      </article>
    </section>
  )
}
