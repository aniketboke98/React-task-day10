import React from 'react'
import { datservices } from '../datservices'
import Footer from './Footer'
import { NavLink } from 'react-router-dom'

function Home() {
  const projects = datservices

  return (
    <div>
      {/* Hero */}
      <section className="bg-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold">Aniket Boke</h1>
              <p className="lead text-muted mb-4">Frontend Developer — building accessible, performant web apps with React.</p>
              <div className="d-flex gap-2 mb-3">
                <NavLink className="btn btn-primary btn-lg" to="/contact">Hire me</NavLink>
                <NavLink className="btn btn-outline-secondary btn-lg" to="/">Portfolio</NavLink>
              </div>
              <div>
                <NavLink to="https://github.com/" target="_blank" rel="noreferrer" className="me-3">GitHub</NavLink>
                <NavLink to="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="me-3">LinkedIn</NavLink>
                <NavLink to="mailto:you@example.com">Email</NavLink>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0 text-center">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&q=80" alt="profile" className="img-fluid rounded shadow" style={{maxHeight: 320}} />
            </div>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="py-5">
        <div className="container">
          <h2 className="mb-4">Featured Projects</h2>
          <div className="row g-3">
            {projects.map((p) => (
              <div key={p.id} className="col-12 col-md-6 col-lg-4">
                <div className="card h-100">
                  <div style={{height:180, overflow:'hidden'}}>
                    <img src={p.image} className="card-img-top" alt={p.title} style={{width:'100%', height:'100%', objectFit:'cover'}} />
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{p.title}</h5>
                    <p className="card-text text-muted" style={{flexGrow:1}}>{p.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <NavLink to={p.link} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-primary">View</NavLink>
                      <span className="text-muted">Web App</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-light py-4">
        <div className="container">
          <h3 className="mb-3">Skills</h3>
          <div className="mb-2">
            <span className="badge bg-primary me-2 mb-2">React</span>
            <span className="badge bg-secondary me-2 mb-2">JavaScript</span>
            <span className="badge bg-success me-2 mb-2">CSS</span>
            <span className="badge bg-info text-dark me-2 mb-2">TypeScript</span>
            <span className="badge bg-warning text-dark me-2 mb-2">Node.js</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5">
        <div className="container text-center">
          <h4 className="mb-3">Interested in working together?</h4>
          <NavLink className="btn btn-lg btn-primary" to="/contact">Let's talk</NavLink>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home