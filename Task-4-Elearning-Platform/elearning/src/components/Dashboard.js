import React from 'react'

function Dashboard() {
  return (
    <div>
      <section id="progress" className="py-5 bg-light">
        <div className="container py-5">
          <div className="text-center mb-5 ">
            <h2 className="fw-bold display-5">Student Progress Dashboard</h2>
            <p className="text-muted fs-5">
              Track completed lessons and achievements.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card platform-card border-0 shadow-lg text-center p-5">
                <h2 className="display-3 fw-bold text-primary">12</h2>
                <p className="fs-5 text-muted">Courses Enrolled</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card platform-card border-0 shadow-lg text-center p-5">
                <h2 className="display-3 fw-bold text-success">8</h2>
                <p className="fs-5 text-muted">Courses Completed</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card platform-card border-0 shadow-lg text-center p-5">
                <h2 className="display-3 fw-bold text-warning">78%</h2>
                <p className="fs-5 text-muted">Average Progress</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard
