import React from 'react'
import foodImg from "../assets/Food.jpeg";
import chatImg from "../assets/Chat.jpeg";
import newsImg from "../assets/News.jpeg";


function Projects() {
const projects = [
  {
    title: 'Online Food Ordering System (Full Stack)',
    desc: 'Complete system with user interface for ordering food and admin panel for managing products, orders, and users. Built using React, Spring Boot, and MySQL.',
    image:foodImg
  },
  {
    title: 'Real-Time Chat Application',
    desc: 'Socket.IO based chat application supporting live messaging with multiple users and instant updates.',
    image:chatImg
  },
  {
    title: 'News Aggregator App',
    desc: 'React-based news app that fetches and displays news from different categories like sports, technology, business, and entertainment using external APIs.',
    image:newsImg
  }
]
  return (
    <div>
      <section className="projects section" id="projects">

        <h2 className="section-title">Projects</h2>

        <div className="project-grid">

            {
            projects.map((project, index) => (

                <div className="project-card" key={index}>

                  <img src={project.image} alt={project.title}  className='project-img'/>

                <h3>{project.title}</h3>

                <p>{project.desc}</p>

                <div className="project-buttons">
                    <button className="btn">
                    Live Demo
                    </button>

                    <button className="btn btn-outline">
                    GitHub
                    </button>
                </div>

                </div>
            ))
            }
        </div>
        </section>
    </div>
  )
}

export default Projects
