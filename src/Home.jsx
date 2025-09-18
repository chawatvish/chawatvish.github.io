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
      <main className="pt-25">
        <section id="home">
          <HeroSection />
        </section>
        
        <section id="about">
          <AboutSection />
        </section>
        
        <section id="skills">
          <SkillsSection />
        </section>
        
        <section id="projects">
          <ProjectsSection />
        </section>
        
        <section id="work">
          <WorkExperienceSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>
    </>
  )
}

export default Home