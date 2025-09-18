import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import authorImg from '../assets/author.jpg'

const HeroSection = () => {
  return (
    <section className="hero-section">
      <img src={authorImg} alt="Chawatvish Worrapoj" className="hero-image" />
      <h1>
        Hi, I'm{' '}
        <span className="gradient-text">
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
  )
}

export default HeroSection