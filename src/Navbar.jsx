import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <>
        <div className='navbar navbar-dark navbar-expand-lg bg-dark'>
                <div className='container-fluid'>
                        <NavLink to='/' className='navbar-brand'>Portfolio</NavLink>
            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                    <li className='nav-item'>
                        <NavLink to='/' className='nav-link' aria-current='page'>Home</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/about' className='nav-link'>About</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/contact' className='nav-link'>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to='/services' className='nav-link'>Services</NavLink>
                    </li>
                    <li>
                        <NavLink to='/blog' className='nav-link'>Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to='/career' className='nav-link'>Career</NavLink>
                    </li>
                    <li>
                        <NavLink to='/faq' className='nav-link'>FAQ</NavLink>
                    </li>
                    <li>
                        <NavLink to='/pricing' className='nav-link'>Pricing</NavLink>
                    </li>
                    <li>
                        <NavLink to='/testimonials' className='nav-link'>Testimonials</NavLink>
                    </li>

                    </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar