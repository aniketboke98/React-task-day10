import React from 'react'
import { NavLink } from 'react-router-dom'

const posts = [
  {id:1,title:'Shipping faster with React',excerpt:'How to optimize your React app for performance.'},
  {id:2,title:'Design systems 101',excerpt:'Building reusable components and tokens.'},
  {id:3,title:'APIs done right',excerpt:'Designing predictable REST and GraphQL APIs.'}
]

function Blog(){
  return (
    <div className="container py-5">
      <h2 className="mb-4">Blog</h2>
      <div className="row g-3">
        {posts.map(p => (
          <div key={p.id} className="col-12 col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{p.title}</h5>
                <p className="card-text text-muted">{p.excerpt}</p>
                <NavLink to="/blog" className="btn btn-sm btn-outline-primary">Read more</NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog