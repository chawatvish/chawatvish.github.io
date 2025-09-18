import React, { useRef } from 'react'
import project1 from '../assets/service1_photo1_card.jpg'
import project2 from '../assets/service1_photo1.jpg'
import project3 from '../assets/thumbnail.png'
import project4 from '../assets/icon.png'

const projects = [
  { title: 'Smart Health App', desc: 'AI-powered health tracking mobile app.', link: '#', img: project1 },
  { title: 'AI Chatbot', desc: 'Conversational AI for customer support.', link: '#', img: project2 },
  { title: 'Portfolio Website', desc: 'Personal website built with React.', link: '#', img: project3 },
  { title: 'Mobile Game', desc: 'Fun and interactive mobile game.', link: '#', img: project4 },
]

const ProjectCard = ({ project }) => {
  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'translateY(-7px) scale(1.04)'
    e.currentTarget.style.boxShadow = '0 12px 32px rgba(50,157,156,0.18), 0 2px 8px rgba(0,0,0,0.10)'
  }

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'none'
    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.10)'
  }

  return (
    <div
      className="project-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={project.img}
        alt={project.title}
        className="project-image"
      />
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.desc}</p>
        <a href={project.link} className="project-link">View Project</a>
      </div>
    </div>
  )
}

const ProjectCarousel = () => {
  const carouselRef = useRef(null)

  const scrollBy = (offset) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: offset, behavior: 'smooth' })
    }
  }

  return (
    <div className="carousel-container">
      <button
        aria-label="Scroll left"
        onClick={() => scrollBy(-340)}
        className="carousel-btn carousel-btn-left"
      >
        &#8592;
      </button>
      <div
        ref={carouselRef}
        className="project-carousel"
      >
        {projects.map(project => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      <button
        aria-label="Scroll right"
        onClick={() => scrollBy(340)}
        className="carousel-btn carousel-btn-right"
      >
        &#8594;
      </button>
    </div>
  )
}

export default ProjectCarousel