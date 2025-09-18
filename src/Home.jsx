import React from 'react'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import WorkExperienceSection from './components/WorkExperienceSection'
import ContactSection from './components/ContactSection'

const Home = () => {
  return (
    <>
      <Navigation />
      <main>
        <section id="home" className="pt-30">
          <HeroSection />
        </section>
        
        <section id="about" className="scroll-mt-20">
          <AboutSection />
        </section>
        
        <section id="skills" className="scroll-mt-20">
          <SkillsSection />
        </section>
        
        <section id="projects" className="scroll-mt-20">
          <ProjectsSection />
        </section>
        
        <section id="work" className="scroll-mt-20">
          <WorkExperienceSection />
        </section>
        
        <section id="contact" className="scroll-mt-20">
          <ContactSection />
        </section>
      </main>
    </>
  )
}

export default Home