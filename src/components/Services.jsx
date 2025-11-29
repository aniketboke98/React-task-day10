import React from 'react'
import { datservices } from '../datservices.js'

function Services() {
  return (
    <div className="container py-4">
      <div className="row mb-3">
        <div className="col-12 text-center">
          <h2 className="mb-1">Our Services</h2>
          <p className="text-muted">We offer a range of design and engineering services to help your product succeed.</p>
        </div>
      </div>

      <div className="row g-3">
        {datservices.map((service) => (
          <div key={service.id} className="col-12 col-sm-6 col-lg-3">
            <div className="card h-100 shadow-sm">
              <div style={{height: 160, overflow: 'hidden'}}>
                <img src={service.image} alt={service.title} className="card-img-top" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text text-muted" style={{flexGrow: 1}}>{service.description}</p>
                <a href={service.link} target="_blank" rel="noreferrer" className="btn btn-primary mt-2 align-self-start">Learn more</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services