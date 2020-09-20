import React from "react"
import { CallUs, ContactForm, Title } from "../../components"
import { config } from "../../data/config/contact"

export const Contact = () => {
  return (
    <section
      id="Contact"
      className="w-screen flex flex-col items-center justify-center py-20 p-5 bg-gradient-to-b from-wineDark to-black"
    >
      <Title>{config.title}</Title>

      <CallUs numbers={config.numbers} />

      <ContactForm />
    </section>
  )
}
