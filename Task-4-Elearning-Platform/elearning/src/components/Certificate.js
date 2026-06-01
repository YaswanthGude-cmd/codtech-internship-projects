import React from 'react'

function Certificate() {
  return (
    <div>
      <section
        id="certificate"
        className="py-5 text-white"
        style={{
          background: "linear-gradient(135deg, #0d6efd, #6610f2)",
        }}
      >
        <div className="container py-5 text-center">
          <h2 className="fw-bold display-4 mb-4">
            Completion Certificate
          </h2>

          <p className="fs-5 mb-5 mx-auto" style={{ maxWidth: "800px" }}>
            Students will receive a professional internship completion
            certificate at the end of the internship program.
          </p>

          <div className="bg-white text-dark rounded shadow-lg p-5 border border-5 border-warning mx-auto">
            <p className="text-uppercase text-muted fw-semibold mb-3">
              Certificate of Completion
            </p>

            <h1 className="display-4 fw-bold text-primary mb-4">CODTECH</h1>

            <p className="fs-4">This certifies that</p>

            <h2 className="display-5 fw-bold mb-4">Yaswanth</h2>

            <p className="fs-5 lh-lg mx-auto" style={{ maxWidth: "700px" }}>
              has successfully completed the internship training program and
              developed the E-Learning Platform UI project.
            </p>

            <div className="row mt-5 text-center">
              <div className="col-md-6 mb-4">
                <hr className="border-dark w-50 mx-auto" />
                <h5>Mentor Signature</h5>
              </div>

              <div className="col-md-6 mb-4">
                <hr className="border-dark w-50 mx-auto" />
                <h5>Internship End Date</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Certificate
