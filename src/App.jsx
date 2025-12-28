import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import WhyUs from "./components/WhyUs"
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import PageWrapper from "./components/PageWrapper"
import AnimatedBackground from "./components/AnimatedBackground"

export default function App() {
  return (
    <>
      {/* GLOBAL BACKGROUND */}
      <AnimatedBackground />

      <Navbar />

      <div className="pt-20 relative">
        <PageWrapper>
          <Hero />
          <Services />
          <WhyUs />
          <CTA />
          <Footer />
        </PageWrapper>
      </div>
    </>
  )
}

