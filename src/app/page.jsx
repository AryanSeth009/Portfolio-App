import React from 'react'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Projects from './components/Projects'
import About from "./components/About";
import Skill from "./components/Skill";
import Services from "./components/Services";
import Tag from './components/Tag'
import HeroSection from './components/HeroSection'
import StackProvider from "./components/StackProvider";
import StackSection from "./components/StackSection";
function page() {
  return (
    <div className='bg-[#E6E6E1]' >
      <Navbar />

      <StackProvider>
        <StackSection id="hero">
          <HeroSection />
            <Tag />
        </StackSection>


        <StackSection className="bg-[#131311] text-[#D1D1C7]">
          <About />
        </StackSection>

        <StackSection className="bg-[#131311] text-[#D1D1C7]" overflowHidden={false}>
          <Skill />
        </StackSection>

        <StackSection className="bg-[#131311] text-[#D1D1C7]" overflowHidden={false} scrollable={true}>
          <Services />
        </StackSection>

        <StackSection scrollable={true}>
          <Projects />
        </StackSection>

        <StackSection>
          <Contact />
        </StackSection>

        <StackSection id="footer">
          <Footer />
        </StackSection>
      </StackProvider>
    </div>
  )
}

export default page
