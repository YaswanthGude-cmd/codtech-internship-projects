import React from 'react'

function Skills() {
const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Bootstrap',
  'Java',
  'Spring Boot',
  'REST APIs',
  'MySQL',
  'Git & GitHub'
]
  return (
    <div>
      <section className="skills section" id="skills">

        <h2 className="section-title">Skills</h2>

        <div className="skills-container">

            {
            skills.map((skill, index) => (
                <div key={index} className="skill-card">
                {skill}
                </div>
            ))
            }

        </div>

        </section>
    </div>
  )
}

export default Skills
