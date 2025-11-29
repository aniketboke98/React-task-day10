import React from 'react'
import { NavLink } from 'react-router-dom'

const team = [
  {id:1, name:'Alex', role:'Founder & Engineer'},
]

function About(){
  return (
    <div className="container py-5">
      <div className="row align-items-center mb-4">
        <div className="col-md-8">
          <h1 className="display-5 fw-bold">Aniket Boke</h1>
          <p className="lead text-muted">Frontend Developer — building accessible, performant web apps with React.</p>
        </div>
        <div className="col-md-4 text-md-end mt-3 mt-md-0">
          <img src="logo192.png" alt="Aniket" className="rounded-circle shadow" style={{width:120, height:120, objectFit:'cover'}} />
        </div>
      </div>

      <p className="text-muted">I build delightful web experiences — from design to production.</p>

      <section className="my-4">
        <h4>Mission</h4>
        <p>To help teams ship high-quality products quickly by focusing on simplicity, accessibility and performance.</p>
      </section>

      <section className="my-4">
        <h4>Values</h4>
        <div className="row">
          <div className="col-md-4">
            <h5>Craftsmanship</h5>
            <p className="text-muted">We care about maintainable code and user experience.</p>
          </div>
          <div className="col-md-4">
            <h5>Collaboration</h5>
            <p className="text-muted">Clear communication and shared ownership are core to our work.</p>
          </div>
          <div className="col-md-4">
            <h5>Impact</h5>
            <p className="text-muted">We focus on delivering measurable value for users and stakeholders.</p>
          </div>
        </div>
      </section>

      <section className="my-4">
        <h4>Team</h4>
        <div className="row g-3">
          {team.map(m => (
            <div key={m.id} className="col-12 col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{m.name}</h5>
                  <p className="card-text text-muted">{m.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="text-center mt-4">
        <NavLink to="/contact" className="btn btn-primary">Work with us</NavLink>
      </div>
    </div>
  )
}

export default About