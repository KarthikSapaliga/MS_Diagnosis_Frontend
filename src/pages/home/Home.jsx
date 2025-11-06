import Hero from "./hero"
import Features from "./Features"
import HowItWorks from "./HowItWorks"
import CTA from "./CTA"

function Home() {
  return (
    <main className="scrollbar-hidden">
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
    </main>
  )
}

export default Home