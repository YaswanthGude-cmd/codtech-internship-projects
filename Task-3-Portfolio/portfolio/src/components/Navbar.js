import React from 'react'

function Navbar() {
  return (
    <div>
      <header className="navbar">
        <h2 className="logo">Yaswanth</h2>

        <nav>
            <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        </header>
    </div>
  )
}

export default Navbar
