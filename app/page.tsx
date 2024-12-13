import Hero from "@/components/Hero"
import Video from "@/components/Video"
import Experience from "@/components/Experience"
import Stats from "@/components/Stats"
import Testimonials from "@/components/Testimonials"
import Newsletter from "@/components/Newsletter"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Video />
      <Experience />
      <Stats />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  )
}

