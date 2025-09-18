import React from 'react'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import WorkExperienceSection from './components/WorkExperienceSection'
import ContactSection from './components/ContactSection'

const Home = () => {
  return (
    <main className="home-container">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <WorkExperienceSection />
      <ContactSection />
    </main>
  )
}

export default Home