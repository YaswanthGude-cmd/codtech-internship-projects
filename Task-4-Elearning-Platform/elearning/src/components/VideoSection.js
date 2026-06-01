import React from 'react'

function VideoSection() {
  return (
    <div>
      <section className="py-5 bg-white">
        <div className="container py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h2 className="fw-bold display-5 mb-4">
                Embedded Video Learning
              </h2>

              <p className="text-muted fs-5 lh-lg mb-4">
                Students can watch lessons directly inside the platform using
                integrated video support.
              </p>

              <ul className="list-group list-group-flush fs-5">
                <li className="list-group-item">✔ HD Video Streaming</li>
                <li className="list-group-item">✔ Responsive Layout</li>
                <li className="list-group-item">✔ Learn Anywhere Anytime</li>
                <li className="list-group-item">✔ Interactive Experience</li>
              </ul>
            </div>

            <div className="col-lg-6">
              <div className="ratio ratio-16x9 shadow-lg rounded overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/Ke90Tje7VS0"
                  title="React Tutorial"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default VideoSection
