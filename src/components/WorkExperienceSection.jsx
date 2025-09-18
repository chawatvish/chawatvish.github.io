import React from 'react'

const workExperience = [
  {
    title: 'Mobile Developer',
    company: 'Tech Solutions',
    period: '2022 - Present',
    description: 'Developed cross-platform mobile apps using React Native and integrated AI features for enhanced user experience.'
  },
  {
    title: 'AI Engineer',
    company: 'AI Innovations',
    period: '2020 - 2022',
    description: 'Built and deployed machine learning models for real-world applications in healthcare and finance.'
  }
]

const WorkExperienceItem = ({ experience }) => (
  <div className="work-item">
    <div className="work-header">
      <strong className="work-title">{experience.title}</strong>
      <span className="work-company"> at {experience.company}</span>
      <span className="work-period"> ({experience.period})</span>
    </div>
    <p className="work-description">{experience.description}</p>
  </div>
)

const WorkExperienceSection = () => {
  return (
    <section className="section-container work-section">
      <div className="card">
        <h2 className="section-title">Work Experience</h2>
        <div className="work-list">
          {workExperience.map((experience, index) => (
            <WorkExperienceItem key={index} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkExperienceSection