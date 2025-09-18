import React from 'react'
import project1 from '../assets/service1_photo1_card.jpg'
import project2 from '../assets/service1_photo1.jpg'
import project3 from '../assets/thumbnail.png'
import project4 from '../assets/icon.png'

const projects = [
  { 
    title: 'Smart Health App', 
    desc: 'AI-powered health tracking mobile app with real-time analytics and personalized recommendations.',
    tech: ['React Native', 'TensorFlow', 'Node.js'],
    link: '#', 
    img: project1 
  },
  { 
    title: 'AI Chatbot Platform', 
    desc: 'Conversational AI for customer support with natural language processing capabilities.',
    tech: ['Python', 'OpenAI', 'FastAPI'],
    link: '#', 
    img: project2 
  },
  { 
    title: 'Portfolio Website', 
    desc: 'Modern, responsive portfolio website built with React and modern design principles.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    link: '#', 
    img: project3 
  },
  { 
    title: 'Mobile Game Engine', 
    desc: 'Cross-platform mobile game engine with physics simulation and multiplayer support.',
    tech: ['Unity', 'C#', 'WebSockets'],
    link: '#', 
    img: project4 
  },
]

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card-modern">
      <div className="project-image-container">
        <img
          src={project.img}
          alt={project.title}
          className="project-image-modern"
        />
        <div className="project-overlay">
          <a href={project.link} className="project-link-modern">
            View Project →
          </a>
        </div>
      </div>
      <div className="project-content-modern">
        <h3 className="project-title-modern">{project.title}</h3>
        <p className="project-desc-modern">{project.desc}</p>
        <div className="project-tech">
          {project.tech.map((tech, i) => (
            <span key={i} className="tech-tag">{tech}</span>
          ))}
        </div>
        <a href={project.link} className="project-link-bottom">
          View Project →
        </a>
      </div>
    </div>
  )
}

const ProjectsSection = () => {
  return (
    <section className="section-container projects-section">
      <div className="card card-wide">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">A showcase of my recent work in mobile development, AI, and web technologies</p>
        <div className="projects-grid-modern">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection