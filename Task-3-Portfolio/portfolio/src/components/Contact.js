import React from 'react'

function Contact() {
  return (
    <section className="contact section" id="contact">

      <h2 className="section-title">Contact</h2>

      <div className="contact-grid">

        {/* Email */}
        <a href="mailto:gudeyaswanth017@gmail.com" className="contact-box">
          <h3>Email</h3>
          <p>gudeyaswanth017@gmail.com</p>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/yaswanth-gude-50813b322"
          target="_blank"
          rel="noreferrer"
          className="contact-box"
        >
          <h3>LinkedIn</h3>
          <p>View My Profile</p>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/YaswanthGude-cmd"
          target="_blank"
          rel="noreferrer"
          className="contact-box"
        >
          <h3>GitHub</h3>
          <p>My Projects & Code</p>
        </a>

      </div>

    </section>
  )
}

export default Contact