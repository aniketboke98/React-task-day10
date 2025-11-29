import React from 'react'
import { NavLink } from 'react-router-dom'

function Contact() {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <h2>Contact Me</h2>
          <p className="text-muted">Fill the form and I'll get back to you within 2 business days.</p>

          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input className="form-control" placeholder="Your name" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="you@example.com" />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="5" placeholder="Tell me about your project"></textarea>
            </div>
            <button type="button" className="btn btn-primary">Send message</button>
          </form>
        </div>

        <div className="col-md-6">
          <h3>Contact details</h3>
          <p className="mb-1"><strong>Email:</strong> you@example.com</p>
          <p className="mb-1"><strong>Phone:</strong> +1 555 555 5555</p>
          <p className="mb-1"><strong>Location:</strong> Remote / City, Country</p>

          <hr />
          <NavLink to="/" className="btn btn-outline-secondary">Back to home</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Contact