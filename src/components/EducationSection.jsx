import React from 'react'

const educationData = [
  {
    degree: 'Master of Software Engineering',
    institution: 'Chulalongkorn University',
    period: '2019 – 2021',
    details: [
      'Focused on software development methodologies, system architecture, and project management.',
      'Specialized in data analytics and social analytics using machine learning.',
      'Independent study: K Plus customer review classification using a multi-label classification model (Python, Pandas, Scikit-learn).'
    ]
  },
  {
    degree: 'Bachelor of Computer Engineering',
    institution: "King Mongkut's University of Technology North Bangkok (KMUTNB)",
    period: '2010 – 2015',
    details: [
      'Foundation in programming, computer networks, hardware design, algorithms, and parallel computing.',
      'Final project: mobile application for document submission, approval, and tracking for teachers, staff, and students.'
    ]
  }
]

const EducationItem = ({ education }) => (
  <div className="education-item">
    <div className="education-header">
      <span className="education-degree">{education.degree}</span>
      <span className="education-institution">{education.institution}</span>
      <span className="education-period">{education.period}</span>
    </div>
    <div className="education-details">
      {education.details.map((detail, idx) => (
        <div key={idx} className="education-detail">
          <span className="education-bullet">▪</span>
          <span>{detail}</span>
        </div>
      ))}
    </div>
  </div>
)

const EducationSection = () => {
  return (
    <section className="section-container education-section">
      <div className="card">
        <h2 className="section-title">Education</h2>
        <div className="education-list">
          {educationData.map((education, index) => (
            <EducationItem key={index} education={education} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EducationSection
