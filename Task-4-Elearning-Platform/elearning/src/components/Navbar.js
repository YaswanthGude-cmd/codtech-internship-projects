import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top shadow">
        <div className="container py-2">
          <a className="navbar-brand fw-bold fs-3" href="#home">
            CODTECH LearnHub
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto gap-lg-3">
              <li className="nav-item">
                <a className="nav-link text-white" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#courses">
                  Courses
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#progress">
                  Progress
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#certificate">
                  Certificate
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
