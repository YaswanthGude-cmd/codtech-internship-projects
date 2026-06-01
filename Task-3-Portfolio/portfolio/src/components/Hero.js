import React from 'react'

function Hero() {
  return (
    <div>
      <section className="hero" id="home">
        <div className="hero-content">

            <h1>
            Hi, I'm <span>Yaswanth</span>
            </h1>

            <h3>
            Frontend & Full Stack Developer
            </h3>

            <p>
            Passionate about building modern responsive
            web applications using React, Java,
            Spring Boot, and scalable backend systems.
            </p>

            <div className="hero-buttons">
            <a href="#projects" className="btn">
                View Projects
            </a>

            <a href="#contact" className="btn btn-outline">
                Contact Me
            </a>
            </div>

        </div>
        </section>
    </div>
  )
}

export default Hero
