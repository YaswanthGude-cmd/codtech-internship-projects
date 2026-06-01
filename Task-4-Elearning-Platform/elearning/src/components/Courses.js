import React from 'react'

function Courses() {
const courses = [
  {
    title: "React Masterclass",
    instructor: "John Carter",
    progress: 40,
    video: "https://www.youtube.com/watch?v=Ke90Tje7VS0",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Java Spring Boot",
    instructor: "Sophia Lee",
    progress: 55,
    video: "https://www.youtube.com/watch?v=9SGDpanrc8U",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "UI/UX Fundamentals",
    instructor: "Emma Watson",
    progress: 60,
    video: "https://www.youtube.com/watch?v=c9Wg6Cb_YlU",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
  },
];
  return (
    <div>
      <section id="courses" className="py-5 bg-light">
        <div className="container py-5">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-5">
            <div>
              <h2 className="fw-bold display-5">Popular Courses</h2>
              <p className="text-muted fs-5">
                Start learning with trending technologies.
              </p>
            </div>

            <input
              type="text"
              className="form-control w-auto px-4 py-2"
              placeholder="Search courses..."
            />
          </div>

          <div className="row g-4">
            {courses.map((course, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="card course-card border-0 shadow-lg h-100 overflow-hidden">
                  <img
                    src={course.image}
                    className="card-img-top"
                    alt={course.title}
                    style={{ height: "250px", objectFit: "cover" }}
                  />

                  <div className="card-body p-4">
                    <h3 className="fw-bold mb-2">{course.title}</h3>

                    <p className="text-muted mb-4">
                      Instructor: {course.instructor}
                    </p>

                    <div className="d-flex justify-content-between mb-2 fw-semibold">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>

                    <div className="progress mb-4" style={{ height: "12px" }}>
                      <div
                        className="progress-bar bg-primary"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>

                    <button
                        className="btn learn-more btn-primary w-100 py-2 fw-semibold"
                        onClick={() => {
                            window.open(course.video, "_blank");
                        }}
                        >
                        Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Courses
