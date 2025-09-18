import React from 'react'

const ContactSection = () => {
  return (
    <section className="section-container contact-section">
      <div className="card">
        <h2 className="section-title">Contact Me</h2>
        <p className="section-text">Feel free to reach out for collaborations or just a friendly hello!</p>
        <a href="mailto:chawatvish@gmail.com" className="contact-btn">
          Email Me
        </a>
      </div>
    </section>
  )
}

export default ContactSection