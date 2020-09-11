import React from "react"
import { CallUs, ContactForm, Title } from "../../components"

export const Contact = () => {
  return (
    <section
      id="Contact"
      className="w-screen flex flex-col items-center justify-center py-20 p-5 bg-gradient-to-b from-wineDark to-black"
    >
      <Title>Book your ride today</Title>

      <CallUs phone="+91 9946837558" />

      <ContactForm />
    </section>
  )
}
