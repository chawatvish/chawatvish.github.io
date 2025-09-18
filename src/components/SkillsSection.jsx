import React from 'react'

const skills = [
  { name: 'React', color: '#61dafb', icon: '⚛️' },
  { name: 'React Native', color: '#61dafb', icon: '📱' },
  { name: 'Python', color: '#3776ab', icon: '🐍' },
  { name: 'TensorFlow', color: '#ff6f00', icon: '🔶' },
  { name: 'Node.js', color: '#8cc84b', icon: '🌳' },
  { name: 'TypeScript', color: '#3178c6', icon: '🟦' },
  { name: 'JavaScript', color: '#f7df1e', icon: '🟨' },
  { name: 'AI/ML', color: '#7c3aed', icon: '🤖' },
  { name: 'Mobile Apps', color: '#00bcd4', icon: '📲' },
  { name: 'UI/UX', color: '#ff4081', icon: '🎨' },
]

const SkillCard = ({ skill }) => {
  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'translateY(-7px) scale(1.06)'
    e.currentTarget.style.boxShadow = `0 8px 32px ${skill.color}33, 0 2px 8px rgba(0,0,0,0.10)`
  }

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'none'
    e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)'
  }

  return (
    <div
      className="skill-card"
      style={{
        background: `linear-gradient(120deg, ${skill.color}22 0%, #f8fafc 100%)`,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="skill-icon">{skill.icon}</span>
      <span className="skill-name">{skill.name}</span>
    </div>
  )
}

const SkillsSection = () => {
  return (
    <section className="section-container skills-section">
      <div className="card">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map(skill => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection