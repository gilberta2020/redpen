import Hero from "@/components/hero"
import About from "@/components/about"
import TeachingPhilosophy from "@/components/teaching-philosophy"
import ReflectivePractice from "@/components/reflective-practice"
import PhotoGallery from "@/components/photo-gallery"
import Contact from "@/components/contact"
import CV from "@/components/cv"

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <TeachingPhilosophy />
      <ReflectivePractice />
      <PhotoGallery />
      <Contact />
      <CV />
    </main>
  )
}
