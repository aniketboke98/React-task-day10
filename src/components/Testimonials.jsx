import React from 'react'
import { NavLink } from 'react-router-dom'

const items = [
  {id:1, name:'Alice', quote:'Great work, delivered on time.'},
  {id:2, name:'Bob', quote:'Highly recommend for frontend work.'},
  {id:3, name:'Carol', quote:'Professional and communicative.'}
]

function Testimonials(){
  return (
    <div className="container py-5">
      <h2 className="mb-4">Testimonials</h2>
      <div className="row g-3">
        {items.map(t => (
          <div key={t.id} className="col-12 col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <p className="card-text">"{t.quote}"</p>
                <p className="card-text"><strong>- {t.name}</strong></p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <NavLink to="/contact" className="btn btn-outline-primary">Get in touch</NavLink>
      </div>
    </div>
  )
}

export default Testimonials