import React from 'react'

function Hero() {
  return (
    <div>
      <section
        id="home"
        className="text-white d-flex align-items-center"
        style={{
          minHeight: "90vh",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container text-center">
          <h1 className="display-3 fw-bold mb-4">
            Interactive E-Learning Platform
          </h1>

          <p className="lead mb-5 mx-auto" style={{ maxWidth: "800px" }}>
            Learn modern technologies with engaging video lessons, progress
            tracking, and completion certificates.
          </p>

          <button
            className="btn btn-warning btn-lg px-5 py-3 fw-bold"
            onClick={() =>
              window.open(
                "https://www.youtube.com/watch?v=Ke90Tje7VS0",
                "_blank"
              )
            }
          >
            Watch Demo Video
          </button>
        </div>
      </section>
    </div>
  )
}

export default Hero
