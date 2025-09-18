import React from 'react'

const skillCategories = [
  {
    title: 'Mobile & Web Development',
    icon: '📱',
    color: '#3b82f6',
    skills: [
      { name: 'iOS', details: 'Swift, SwiftUI, UIKit', icon: '🍎', color: '#007AFF' },
      { name: 'Flutter', details: 'Dart', icon: '💙', color: '#02569B' },
      { name: 'React & Next.js', details: 'TypeScript, JavaScript', icon: '⚛️', color: '#61DAFB' },
      { name: 'Backend', details: 'Node.js, .NET, SQL, REST APIs', icon: '⚙️', color: '#512BD4' }
    ]
  },
  {
    title: 'AI/ML & Emerging Tech',
    icon: '🤖',
    color: '#8b5cf6',
    skills: [
      { name: 'Python', details: 'TensorFlow, ML', icon: '🐍', color: '#3776AB' },
      { name: 'LLM Integration', details: 'Multi-agent systems', icon: '🧠', color: '#FF6B6B' },
      { name: 'Agentic AI', details: 'Workflow automation', icon: '🔮', color: '#9C27B0' }
    ]
  },
  {
    title: 'Engineering Practices & Tools',
    icon: '�️',
    color: '#10b981',
    skills: [
      { name: 'Agile & CI/CD', details: 'Scrum, Jenkins, GitHub Actions', icon: '🚀', color: '#FF9500' },
      { name: 'Development Tools', details: 'Git, Firebase, Jira, Confluence', icon: '🔧', color: '#34C759' },
      { name: 'Design & Collaboration', details: 'Figma, Code Reviews, Pair Programming', icon: '🎨', color: '#F24E1E' }
    ]
  }
]

const professionalCompetencies = [
  'Cross-functional team collaboration and leadership',
  'Problem-solving and critical thinking in complex technical environments',  
  'Mentoring junior developers and knowledge sharing',
  'System design and architecture planning',
  'Test-driven development and quality assurance practices',
  'Performance optimization and scalability solutions'
]

const SkillCard = ({ skill }) => {
  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'translateY(-4px) scale(1.03)'
    e.currentTarget.style.boxShadow = `0 6px 20px ${skill.color}33, 0 2px 8px rgba(0,0,0,0.10)`
  }

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'none'
    e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)'
  }

  return (
    <div
      className="skill-card enhanced-skill-card"
      style={{
        background: `linear-gradient(135deg, ${skill.color}15 0%, var(--card-bg-light) 100%)`,
        borderLeft: `3px solid ${skill.color}`,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="skill-icon" style={{ color: skill.color }}>{skill.icon}</span>
      <div className="skill-content">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-details">{skill.details}</span>
      </div>
    </div>
  )
}

const CategorySection = ({ category }) => (
  <div className="skill-category">
    <div className="category-header">
      <div className="category-icon-wrapper" style={{ background: `${category.color}20` }}>
        <span className="category-icon" style={{ color: category.color }}>{category.icon}</span>
      </div>
      <h3 className="category-title">{category.title}</h3>
    </div>
    <div className="category-skills">
      {category.skills.map(skill => (
        <SkillCard key={skill.name} skill={skill} />
      ))}
    </div>
  </div>
)

const CompetencySection = () => (
  <div className="skill-category competency-section">
    <div className="category-header">
      <div className="category-icon-wrapper" style={{ background: '#6366f120' }}>
        <span className="category-icon" style={{ color: '#6366f1' }}>🎯</span>
      </div>
      <h3 className="category-title">Professional Competencies</h3>
    </div>
    <div className="competency-list">
      {professionalCompetencies.map((competency, index) => (
        <div key={index} className="competency-item">
          <span className="competency-bullet">▪</span>
          <span className="competency-text">{competency}</span>
        </div>
      ))}
    </div>
  </div>
)

const SkillsSection = () => {
  return (
    <section className="section-container skills-section">
      <div className="card">
        <h2 className="section-title">Technical Skills & Expertise</h2>
        <p className="section-subtitle">
          Core technologies and professional competencies
        </p>
        <div className="skills-categories">
          {skillCategories.map(category => (
            <CategorySection key={category.title} category={category} />
          ))}
          <CompetencySection />
        </div>
      </div>
    </section>
  )
}

export default SkillsSection