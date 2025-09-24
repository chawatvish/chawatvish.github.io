import React, { useEffect } from 'react'
import { trackPageView } from './utils/analytics'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import WorkExperienceSection from './components/WorkExperienceSection'
import ContactSection from './components/ContactSection'
import AnalyticsDashboard from './components/AnalyticsDashboard'

const Home = () => {
  useEffect(() => {
    trackPageView('portfolio_home');
  }, []);
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

        <section id="work" className="scroll-mt-20">
          <WorkExperienceSection />
        </section>
        
        <section id="skills" className="scroll-mt-20">
          <SkillsSection />
        </section>
        
        <section id="projects" className="scroll-mt-20">
          <ProjectsSection />
        </section>
        
        <section id="contact" className="scroll-mt-20">
          <ContactSection />
        </section>
      </main>
    </>
  )
}

export default Home