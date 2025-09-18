import React from 'react'
import ProjectCarousel from './ProjectCarousel'

const ProjectsSection = () => {
  return (
    <section className="section-container projects-section">
      <div className="card card-wide">
        <h2 className="section-title">Projects</h2>
        <ProjectCarousel />
      </div>
    </section>
  )
}

export default ProjectsSection