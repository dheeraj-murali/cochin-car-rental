import React from "react"
import { Alert } from "../components"
import {
  About,
  Contact,
  Fleet,
  Header,
  Hero,
  Package,
  SEO,
  Special,
  Reviews,
} from "../containers"
import { AppProvider } from "../context"

export default function Home() {
  return (
    <AppProvider>
      <SEO />
      <Header />
      <Hero />
      <About />
      <Special />
      <Fleet />
      <Package />
      <Reviews />
      <Contact />
      <Alert />
    </AppProvider>
  )
}
