import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { trackButtonClick } from '../utils/analytics'
import authorImg from '../assets/author.jpg'

const HeroSection = () => {
  const scrollToContact = () => {
    trackButtonClick('cta', 'Contact Me', {
      source: 'hero_section',
      action: 'scroll_to_contact'
    })

    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

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
      <h2>Engineering Intelligent Mobile Experiences</h2>
      <p>
        Bridging the gap between human creativity and AI efficiency. I craft
        robust iOS & Flutter applications that tell a story.
      </p>
      <button onClick={scrollToContact} className="cta-btn">
        Let's Collaborate
      </button>
    </section>
  )
}

export default HeroSection
