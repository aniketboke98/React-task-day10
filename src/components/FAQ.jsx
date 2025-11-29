import React from 'react'

const faqs = [
  {id:1, q:'What services do you offer?', a:'Design, frontend, backend, cloud and consulting.'},
  {id:2, q:'How do I request a quote?', a:'Use the contact form and include project details.'},
  {id:3, q:'Do you hire contractors?', a:'Yes — we hire both contractors and full-time employees.'}
]

function FAQ(){
  return (
    <div className="container py-5">
      <h2 className="mb-4">Frequently Asked Questions</h2>
      <div className="accordion" id="faqAccordion">
        {faqs.map(f => (
          <div className="accordion-item" key={f.id}>
            <h2 className="accordion-header" id={`heading${f.id}`}>
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${f.id}`} aria-expanded="false" aria-controls={`collapse${f.id}`}>
                {f.q}
              </button>
            </h2>
            <div id={`collapse${f.id}`} className="accordion-collapse collapse" aria-labelledby={`heading${f.id}`} data-bs-parent="#faqAccordion">
              <div className="accordion-body">{f.a}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ