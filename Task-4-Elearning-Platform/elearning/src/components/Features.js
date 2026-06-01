import React from 'react'

function Features() {
  return (
    <div>
      <section className="py-5 bg-white">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold display-5">Platform Features</h2>
            <p className="text-muted fs-5">
              Everything students need for an engaging online learning
              experience.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card platform-card border-0 shadow-lg h-100 text-center p-4">
                <div className="display-3 mb-3">📚</div>
                <h3 className="fw-bold">Course Listing</h3>
                <p className="text-muted mt-3">
                  Browse multiple technology courses with detailed previews and
                  instructors.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card platform-card border-0 shadow-lg h-100 text-center p-4">
                <div className="display-3 mb-3">📈</div>
                <h3 className="fw-bold">Progress Tracking</h3>
                <p className="text-muted mt-3">
                  Monitor learning progress with interactive progress bars and
                  dashboards.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card platform-card border-0 shadow-lg h-100 text-center p-4">
                <div className="display-3 mb-3">🎥</div>
                <h3 className="fw-bold">Video Embedding</h3>
                <p className="text-muted mt-3">
                  Watch tutorials directly inside the learning platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Features
