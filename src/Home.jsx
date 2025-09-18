
import React from 'react'
import authorImg from './assets/author.jpg'
import project1 from './assets/service1_photo1_card.jpg'
import project2 from './assets/service1_photo1.jpg'
import project3 from './assets/thumbnail.png'
import project4 from './assets/icon.png'
import { TypeAnimation } from 'react-type-animation'


function ParallaxCard({ project }) {
  const [style, setStyle] = React.useState({});
  const cardRef = React.useRef(null);

  function handleMouseMove(e) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10; // max 10deg
    const rotateY = ((x - centerX) / centerX) * -10;
    setStyle({
      transform: `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`,
      boxShadow: '0 12px 32px rgba(50,157,156,0.18), 0 2px 8px rgba(0,0,0,0.10)',
      transition: 'transform 0.12s, box-shadow 0.12s',
      zIndex: 2
    });
  }

  function handleMouseLeave() {
    setStyle({
      transform: 'perspective(700px) rotateX(0deg) rotateY(0deg) scale(1)',
      boxShadow: '0 4px 16px rgba(0,0,0,0.10)',
      transition: 'transform 0.3s, box-shadow 0.3s',
      zIndex: 1
    });
  }

  return (
    <div
      ref={cardRef}
      style={{
        background: 'linear-gradient(120deg, #f8ffae, #43c6ac)',
        borderRadius: 20,
        padding: '36px 30px',
        minWidth: 260,
        maxWidth: 320,
        boxShadow: '0 4px 16px rgba(0,0,0,0.10)',
        textAlign: 'left',
        margin: 8,
        cursor: 'pointer',
        willChange: 'transform',
        ...style
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      tabIndex={0}
    >
      <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>{project.title}</h3>
      <p style={{ fontSize: 17, marginBottom: 16 }}>{project.desc}</p>
      <a href={project.link} style={{ color: '#329D9C', fontWeight: 600, textDecoration: 'underline' }}>View Project</a>
    </div>
  );
}

// ProjectCarousel component (moved above Home)
function ProjectCarousel() {
  const carouselRef = React.useRef(null);
  const projects = [
    { title: 'Smart Health App', desc: 'AI-powered health tracking mobile app.', link: '#', img: project1 },
    { title: 'AI Chatbot', desc: 'Conversational AI for customer support.', link: '#', img: project2 },
    { title: 'Portfolio Website', desc: 'Personal website built with React.', link: '#', img: project3 },
    { title: 'Mobile Game', desc: 'Fun and interactive mobile game.', link: '#', img: project4 },
  ];

  const scrollBy = (offset) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <button
        aria-label="Scroll left"
        onClick={() => scrollBy(-340)}
        style={{
          position: 'absolute',
          left: -18,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          background: 'rgba(255,255,255,0.92)',
          border: 'none',
          borderRadius: '50%',
          width: 44,
          height: 44,
          boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 28,
          cursor: 'pointer',
          transition: 'background 0.18s',
        }}
      >
        &#8592;
      </button>
      <div
        ref={carouselRef}
        style={{
          display: 'flex',
          overflowX: 'auto',
          gap: 32,
          paddingBottom: 8,
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
        className="project-carousel"
      >
        {projects.map(project => (
          <div
            key={project.title}
            style={{
              background: 'linear-gradient(120deg, #f8ffae, #43c6ac)',
              borderRadius: 20,
              minWidth: 320,
              maxWidth: 340,
              boxShadow: '0 4px 16px rgba(0,0,0,0.10)',
              textAlign: 'left',
              margin: '8px 0',
              cursor: 'pointer',
              willChange: 'transform',
              scrollSnapAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'stretch',
              transition: 'transform 0.18s, box-shadow 0.18s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-7px) scale(1.04)';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(50,157,156,0.18), 0 2px 8px rgba(0,0,0,0.10)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.10)';
            }}
          >
            <img
              src={project.img}
              alt={project.title}
              style={{
                width: '100%',
                height: 170,
                objectFit: 'cover',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                marginBottom: 0,
              }}
            />
            <div style={{ padding: '22px 22px 18px 22px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>{project.title}</h3>
              <p style={{ fontSize: 17, marginBottom: 16 }}>{project.desc}</p>
              <a href={project.link} style={{ color: '#329D9C', fontWeight: 600, textDecoration: 'underline', marginTop: 'auto' }}>View Project</a>
            </div>
          </div>
        ))}
      </div>
      <button
        aria-label="Scroll right"
        onClick={() => scrollBy(340)}
        style={{
          position: 'absolute',
          right: -18,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          background: 'rgba(255,255,255,0.92)',
          border: 'none',
          borderRadius: '50%',
          width: 44,
          height: 44,
          boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 28,
          cursor: 'pointer',
          transition: 'background 0.18s',
        }}
      >
        &#8594;
      </button>
      <style>{`
        .project-carousel::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}

const Home = () => {
  return (
    <main className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <img src={authorImg} alt="Chawatvish Worrapoj" className="hero-image" />
        <h1>
          Hi, I'm{' '}
          <span
            style={{
              background: 'linear-gradient(90deg, #7BE495, #329D9C)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              display: 'inline-block'
            }}
          >
            <TypeAnimation
              sequence={['Chawatvish Worrapoj', 1500]}
              wrapper="span"
              speed={50}
              cursor={true}
              repeat={0}
            />
          </span>
        </h1>
        <h2>Mobile and AI Developer</h2>
        <p>Welcome to my portfolio website!</p>
        <a href="https://x.com/chawatvish" className="cta-btn">
          Contact Me
        </a>
      </section>


      {/* About Me Section as Card */}
      <section className="about-section" style={{ display: 'flex', justifyContent: 'center', margin: '40px 0' }}>
        <div style={{
          background: '#fff',
          borderRadius: 24,
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
          padding: '48px 32px',
          maxWidth: 800,
          width: '100%',
          textAlign: 'center',
        }}>
          <h2 style={{ fontSize: 36, fontWeight: 700, marginBottom: 24 }}>About Me</h2>
          <p style={{ maxWidth: 700, margin: '0 auto', fontSize: 20 }}>
            I am a passionate Mobile and AI Developer with a strong background in building innovative solutions. I love exploring new technologies and creating impactful products that make a difference.
          </p>
        </div>
      </section>


      {/* Skills Section as Card - Modern Grid */}
      <section className="skills-section" style={{ display: 'flex', justifyContent: 'center', margin: '40px 0' }}>
        <div style={{
          background: '#fff',
          borderRadius: 24,
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
          padding: '48px 32px',
          maxWidth: 900,
          width: '100%',
          textAlign: 'center',
        }}>
          <h2 style={{ fontSize: 36, fontWeight: 700, marginBottom: 32, letterSpacing: -1 }}>Skills</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: 28,
              justifyItems: 'center',
              alignItems: 'center',
              margin: '0 auto',
              maxWidth: 700,
            }}
          >
            {[
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
            ].map(skill => (
              <div
                key={skill.name}
                style={{
                  background: `linear-gradient(120deg, ${skill.color}22 0%, #f8fafc 100%)`,
                  borderRadius: 18,
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                  padding: '28px 0 18px 0',
                  width: 140,
                  minHeight: 110,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.18s, box-shadow 0.18s',
                  fontWeight: 600,
                  fontSize: 18,
                  color: '#18181b',
                  cursor: 'pointer',
                  position: 'relative',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-7px) scale(1.06)';
                  e.currentTarget.style.boxShadow = `0 8px 32px ${skill.color}33, 0 2px 8px rgba(0,0,0,0.10)`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)';
                }}
              >
                <span style={{ fontSize: 32, marginBottom: 10 }}>{skill.icon}</span>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Projects Section as Card with Horizontal Carousel */}


      <section className="projects-section" style={{ display: 'flex', justifyContent: 'center', margin: '40px 0' }}>
        <div style={{
          background: '#fff',
          borderRadius: 24,
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
          padding: '48px 32px',
          maxWidth: 1100,
          width: '100%',
          textAlign: 'center',
          position: 'relative',
        }}>
          <h2 style={{ fontSize: 36, fontWeight: 700, marginBottom: 24 }}>Projects</h2>
          <ProjectCarousel />
        </div>
      </section>




      {/* Work Experience Section as Card */}
      <section className="work-section" style={{ display: 'flex', justifyContent: 'center', margin: '40px 0' }}>
        <div style={{
          background: '#fff',
          borderRadius: 24,
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
          padding: '48px 32px',
          maxWidth: 800,
          width: '100%',
          textAlign: 'center',
        }}>
          <h2 style={{ fontSize: 36, fontWeight: 700, marginBottom: 24 }}>Work Experience</h2>
          <div style={{ maxWidth: 700, margin: '0 auto', fontSize: 20, textAlign: 'left' }}>
            <div style={{ marginBottom: 24 }}>
              <strong>Mobile Developer</strong> at Tech Solutions (2022 - Present)
              <br />
              <span>Developed cross-platform mobile apps using React Native and integrated AI features for enhanced user experience.</span>
            </div>
            <div>
              <strong>AI Engineer</strong> at AI Innovations (2020 - 2022)
              <br />
              <span>Built and deployed machine learning models for real-world applications in healthcare and finance.</span>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Me Section as Card */}
      <section className="contact-section" style={{ display: 'flex', justifyContent: 'center', margin: '40px 0' }}>
        <div style={{
          background: '#fff',
          borderRadius: 24,
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
          padding: '48px 32px',
          maxWidth: 700,
          width: '100%',
          textAlign: 'center',
        }}>
          <h2 style={{ fontSize: 36, fontWeight: 700, marginBottom: 24 }}>Contact Me</h2>
          <p style={{ fontSize: 20, marginBottom: 18 }}>Feel free to reach out for collaborations or just a friendly hello!</p>
          <a href="mailto:chawatvish@gmail.com" style={{
            display: 'inline-block',
            background: 'linear-gradient(90deg, #329D9C, #7BE495)',
            color: '#fff',
            borderRadius: 10,
            padding: '14px 36px',
            fontWeight: 700,
            fontSize: 20,
            textDecoration: 'none',
            boxShadow: '0 2px 8px rgba(0,0,0,0.10)'
          }}>Email Me</a>
        </div>
      </section>
    </main>
  )
}

export default Home
