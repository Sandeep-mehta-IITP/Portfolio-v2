import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { HowIThink } from "@/components/how-i-think"
import { About } from "@/components/about"
import {Skills} from "@/components/skills"
import { Projects } from "@/components/projects"
import { Certificates } from "@/components/certificates"
import { Blog } from "@/components/blog"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <HowIThink />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Blog />
      <Contact />
      <Footer />
    </main>
  )
}
