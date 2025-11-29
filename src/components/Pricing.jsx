import React from 'react'
import { NavLink } from 'react-router-dom'

const plans = [
  {id:1, name:'Starter', price:'$29/mo', perks:['Email support','Basic features']},
  {id:2, name:'Pro', price:'$99/mo', perks:['Priority support','Advanced features']},
  {id:3, name:'Enterprise', price:'Contact', perks:['Dedicated support','Custom SLAs']}
]

function Pricing(){
  return (
    <div className="container py-5">
      <h2 className="mb-4">Pricing</h2>
      <div className="row g-3">
        {plans.map(p => (
          <div key={p.id} className="col-12 col-md-4">
            <div className="card h-100 text-center">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{p.name}</h5>
                <h3 className="my-3">{p.price}</h3>
                <ul className="list-unstyled text-muted" style={{flexGrow:1}}>
                  {p.perks.map((k,i) => <li key={i}>{k}</li>)}
                </ul>
                <NavLink to="/contact" className="btn btn-primary">Choose</NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pricing