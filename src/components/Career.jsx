import React from 'react'
import { NavLink } from 'react-router-dom'

const jobs = [
  {id:1, title:'Frontend Developer', loc:'Remote', type:'Full-time', desc:'React, TypeScript, CSS'},
  {id:2, title:'Backend Developer', loc:'Remote', type:'Full-time', desc:'Node.js, Databases, APIs'},
  {id:3, title:'UI/UX Designer', loc:'Remote', type:'Contract', desc:'Figma, Prototyping, Research'},
]

function Career(){
  return (
    <div className="container py-5">
      <h2 className="mb-3">Careers</h2>
      <p className="text-muted">Join our team — we value ownership, craftsmanship and clear communication.</p>

      <div className="row g-3">
        {jobs.map(j => (
          <div key={j.id} className="col-12 col-md-6">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{j.title}</h5>
                <p className="mb-1 text-muted">{j.type} · {j.loc}</p>
                <p className="text-muted" style={{flexGrow:1}}>{j.desc}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <NavLink to="/career" className="btn btn-sm btn-primary">Apply</NavLink>
                  <small className="text-muted">Posted recently</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Career