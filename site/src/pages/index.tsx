import React from "react"
import { Alert } from "../components"
import {
  About,
  Contact,
  Fleet,
  Footer,
  Header,
  Hero,
  Package,
  Reviews,
  SEO,
  Special,
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
      <Footer />
      <Alert />
    </AppProvider>
  )
}
