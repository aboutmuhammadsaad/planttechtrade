"use client"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Products from "@/components/products"
import WhyChooseUs from "@/components/why-choose-us"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <Products />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  )
}
