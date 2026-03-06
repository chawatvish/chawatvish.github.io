import React, { useEffect } from 'react'
import { X } from 'lucide-react'
import { trackProjectClick } from '../utils/analytics'

const ProjectDetailModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!project) return null

  const handleCtaClick = () => {
    trackProjectClick(project.title, project.link, { source: 'modal_cta' })
  }

  return (
    <div
      className="project-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div className="project-modal-panel" onClick={(e) => e.stopPropagation()}>
        <button
          className="project-modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Header row: icon + company/period */}
        <div className="project-modal-header">
          <span className="project-modal-icon" aria-hidden="true">
            {project.icon}
          </span>
          <div className="project-modal-meta">
            <span className="project-modal-company">{project.company}</span>
            <span className="project-modal-period">{project.period}</span>
          </div>
        </div>

        {/* Title */}
        <h2 id="project-modal-title" className="project-modal-title">
          {project.title}
        </h2>

        {/* Full description */}
        <p className="project-modal-desc">{project.fullDesc}</p>

        {/* Key contributions */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="project-modal-highlights">
            <h3 className="project-modal-section-label">Key Contributions</h3>
            <ul className="project-modal-list">
              {project.highlights.map((item, i) => (
                <li key={i} className="project-modal-list-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        <div className="project-modal-tech">
          <h3 className="project-modal-section-label">Technologies</h3>
          <div className="project-tech">
            {project.tech.map((tech, i) => (
              <span key={i} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA — only shown when there is a real external link */}
        {project.link !== '#' && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-modal-cta"
            onClick={handleCtaClick}
          >
            View Project →
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectDetailModal
