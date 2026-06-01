import React from 'react'

function About() {
  return (
    <div>
      <section className="about section" id="about">

        <h2 className="section-title">About Me</h2>
        <h5 className='section-title2'>Web Developer | Full-Stack Engineer</h5>
        <h5 className='section-title3'>Specialized in React, Spring Boot, and REST API development.</h5>

        <div className="about-card">

            <p>
            I am a full-stack web developer focused on building modern, scalable, and responsive web applications.
            </p>

            <p>
            I specialize in React for frontend development and Java Spring Boot for backend systems, with experience in designing REST APIs and working with MySQL databases.
            </p>
            <p>I have developed real-world projects including a food ordering system with admin control, a real-time chat application using Socket.IO, and a news aggregation platform integrated with external APIs.
            </p>
            <p>My focus is on building functional, performance-oriented web applications with clean architecture and practical usability.</p>
        </div>

        </section>
    </div>
  )
}

export default About
