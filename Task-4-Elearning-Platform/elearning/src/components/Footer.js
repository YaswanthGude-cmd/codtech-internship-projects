import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="bg-dark text-white text-center py-4">
        <div className="container">
          <h3 className="fw-bold mb-3">CODTECH LearnHub</h3>
          <p className="mb-3">
            Modern E-Learning Platform UI using React and Bootstrap.
          </p>

          <div className="d-flex justify-content-center gap-4 flex-wrap">
            <a href="#home" className="text-white text-decoration-none">
              About
            </a>
            <a href="#courses" className="text-white text-decoration-none">
              Courses
            </a>
            <a href="#contact" className="text-white text-decoration-none">
              Contact
            </a>
            <a href="#support" className="text-white text-decoration-none">
              Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
