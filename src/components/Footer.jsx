import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer(){
  return (
    <footer className="bg-dark text-white">
      <div className="container py-4 text-center">
        <p className="mb-1">© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        <NavLink to="/contact" className="btn btn-outline-light">Contact</NavLink>
      </div>
    </footer>
  )
}

export default Footer