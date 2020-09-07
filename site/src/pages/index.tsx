import React from "react"
import { About, Fleet, Header, Hero, SEO, Special } from "../containers"
import { Package } from "../containers/Package"

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
    </>
  )
}
