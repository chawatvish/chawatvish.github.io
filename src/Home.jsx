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
        <h2>Mobile and AI Developer</h2>
        <p>Welcome to my portfolio website!</p>
        <a href="https://x.com/chawatvish" className="cta-btn">
          Contact Me
        </a>
      </section>
    </main>
  )
}

export default Home
