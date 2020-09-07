import React from "react"
import {
  About,
  Contact,
  Fleet,
  Header,
  Hero,
  Package,
  SEO,
  Special,
} from "../containers"

export default function Home() {
  return (
    <>
      <SEO />
      <Header />
      <Hero />
      <About />
      <Special />
      <Fleet />
      <Package />
      <Contact />
    </>
  )
}
