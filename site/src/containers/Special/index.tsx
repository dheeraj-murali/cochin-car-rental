import React from "react"
import { Feat, Title } from "../../components"
import { config } from "../../config/special"

export const Special = () => {
  return (
    <section
      id="Special"
      className="w-screen flex-col justify-center px-5 py-10 bg-gradient-to-b from-wineDark to-black"
    >
      <Title>{config.title}</Title>
      <ul className="flex flex-wrap p-5">
        {config.content.map((item, index) => (
          <li key={`${index}_special`} className="w-full md:w-1/2 lg:w-1/3">
            <Feat title={item.title} content={item.content}>
              {item.icon}
            </Feat>
          </li>
        ))}
      </ul>
    </section>
  )
}
