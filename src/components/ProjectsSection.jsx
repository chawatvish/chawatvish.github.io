import React, { useState } from 'react'
import { trackProjectClick } from '../utils/analytics'
import ProjectDetailModal from './ProjectDetailModal'
import imgThumbnail from '../assets/thumbnail.png'
import imgService1Card from '../assets/service1_photo1_card.jpg'
import imgService1 from '../assets/service1_photo1.jpg'
import imgIcon from '../assets/icon.png'
import projectsData from '../data/projects.json'

const imageMap = {
  thumbnail: imgThumbnail,
  service1_photo1_card: imgService1Card,
  service1_photo1: imgService1,
  icon: imgIcon
}

const allProjects = projectsData.map((project) => ({
  ...project,
  img: imageMap[project.imgKey]
}))

const ProjectCard = ({ project, onViewDetails }) => {
  const handleOpen = (source) => {
    trackProjectClick(project.title, project.link, {
      source: source,
      technologies: project.tech.join(', ')
    })
    onViewDetails(project)
  }

  return (
    <div
      className="project-card-modern"
      onClick={() => handleOpen('card')}
      style={{ cursor: 'pointer' }}
    >
      <div className="project-image-container">
        <img
          src={project.img}
          alt={project.title}
          className="project-image-modern"
          loading="lazy"
        />
        <div className="project-overlay">
          <button
            className="project-link-modern"
            onClick={(e) => {
              e.stopPropagation()
              handleOpen('overlay')
            }}
          >
            View Details →
          </button>
        </div>
      </div>
      <div className="project-content-modern">
        <h3 className="project-title-modern">{project.title}</h3>
        <p className="project-desc-modern">{project.desc}</p>
        <div className="project-tech">
          {project.tech.map((tech, i) => (
            <span key={i} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        <button
          className="project-link-bottom"
          onClick={(e) => {
            e.stopPropagation()
            handleOpen('bottom_link')
          }}
        >
          View Details →
        </button>
      </div>
    </div>
  )
}

const ProjectsSection = ({ sectionId, sectionTitle, subtitle, category }) => {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = category
    ? allProjects.filter((p) => p.category === category)
    : allProjects

  return (
    <>
      <section
        id={sectionId}
        className="section-container projects-section scroll-mt-20"
      >
        <div className="card card-wide">
          <h2 className="section-title">{sectionTitle}</h2>
          <p className="section-subtitle">{subtitle}</p>
          <div className="projects-grid-modern">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                onViewDetails={setSelectedProject}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  )
}

export default ProjectsSection
