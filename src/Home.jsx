import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const Home = () => {
  return (
    <main className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>
          Hi, I'm{' '}
          <span
            style={{
              background: 'linear-gradient(90deg, #7BE495, #329D9C)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              display: 'inline-block'
            }}
          >
            <TypeAnimation
              sequence={['Chawatvish Worrapoj', 1500]}
              wrapper="span"
              speed={50}
              cursor={true}
              repeat={0}
            />
          </span>
        </h1>
        <h2>Frontend Developer</h2>
        <p>Welcome to my portfolio website!</p>
        <a href="#contact" className="cta-btn">
          Contact Me
        </a>
      </section>
      {/* About Section */}
      <section className="about-section" id="about">
        <h2>About Me</h2>
        <p>
          [A short bio about yourself, your skills, and your passion for
          development.]
        </p>
      </section>
      {/* Projects Section */}
      <section className="projects-section" id="projects">
        <h2>Projects</h2>
        <div className="projects-list">
          {/* Add project cards here */}
          <div className="project-card">Project 1</div>
          <div className="project-card">Project 2</div>
          <div className="project-card">Project 3</div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <h2>Contact</h2>
        <p>
          Email:{' '}
          <a href="mailto:your.email@example.com">your.email@example.com</a>
        </p>
        <p>LinkedIn | GitHub | Twitter</p>
      </section>
    </main>
  )
}

export default Home
