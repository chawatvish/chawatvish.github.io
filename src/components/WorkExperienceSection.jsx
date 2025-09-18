import React from 'react'

const workExperience = [
  {
    title: 'Advanced Software Engineer',
    company: 'KASIKORN Business-Technology Group [KBTG]',
    period: 'Nov 2018 - Present',
    description: '🏅 Promoted to Advanced Software Engineer in May 2021\n\n• K PLUS Thailand Enhancements (Jan 2025 – Present): Collaborating with cross-functional teams to deliver new features in the K PLUS Thailand mobile banking app, focusing on compliance, usability, and performance optimization.\n• Next.js Web Application: Building internal tools with Next.js to improve workflows for customer service teams.\n• Agentic AI Workflow Development: Implementing multi-agent orchestration with LLM integration to automate complex workflows.\n\n• K PLUS Regional (Vietnam) (May 2021 – Dec 2024): Developed mobile banking applications K+ VN and K+ VN SME for iOS. Led third-party feature integrations tailored to regional requirements and coordinated with outsourcing teams.\n\n• K PLUS Thailand Platform (Nov 2018 – Apr 2021): Researched, developed, and maintained the K PLUS Thailand mobile app. Worked with vendors for integrations and resolved incidents to ensure reliability.\n\n• Workflow & Tools: Agile (Scrum), Pair Programming, Code Reviews, CI/CD with Jenkins, Jira, Confluence, Git, Firebase, Figma'
  },
  {
    title: 'Mobile Developer (iOS & Android)',
    company: 'Samart Corporation Public Co., Ltd.',
    period: 'Jan 2017 - Nov 2018',
    description: '• Designed and built applications for iOS and Android platforms.\n• Ensured performance, quality, and responsiveness of apps.\n• Collaborated with team members to define, design, and deliver new features.\n• Debugged, optimized, and maintained applications.\n• Maintained high code quality and organizational standards.\n• Technologies: iOS (Swift, Objective-C), Android (Java, Kotlin), Agile development'
  },
  {
    title: 'Programmer (C# Backend Developer)',
    company: 'PWM Solutions Co.,Ltd.',
    period: 'Aug 2016 - Dec 2016',
    description: '• Developed API controllers to support frontend applications.\n• Built a reporting system for the Department of Land Transport (DLT).\n• Focused on backend architecture, secure API development, and system integration.\n• Technologies: C#, .NET Framework, REST APIs, SQL Server, Entity Framework'
  }
]

const WorkExperienceItem = ({ experience }) => (
  <div className="work-item enhanced-work-item">
    <div className="work-header">
      <strong className="work-title">{experience.title}</strong>
      <span className="work-company"> at {experience.company}</span>
      <span className="work-period"> ({experience.period})</span>
    </div>
    <div className="work-description enhanced-description">
      {experience.description.split('\n').map((point, idx) => (
        <div key={idx} className="work-bullet-point">
          {point.trim().startsWith('•') ? (
            <>
              <span className="bullet-dot">•</span>
              <span>{point.trim().substring(1).trim()}</span>
            </>
          ) : (
            <span>{point}</span>
          )}
        </div>
      ))}
    </div>
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