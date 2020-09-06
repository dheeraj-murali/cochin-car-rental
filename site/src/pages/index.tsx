import React, { useState, useEffect } from "react"
import { Header, Hero, About, Special, Fleet } from "../containers"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Special />
      <Fleet />
    </>
  )
}
