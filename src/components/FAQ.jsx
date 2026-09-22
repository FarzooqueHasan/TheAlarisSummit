import React, { useState } from 'react';

const FAQS = [
  {
    q: 'Question',
    a: 'Answer..'
  },
  {
    q: 'Question',
    a: 'Answer..'
  },
  {
    q: 'Question',
    a: 'Answer..'
  },
  {
    q: 'Question',
    a: 'Answer..'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="faq-section" aria-label="Frequently Asked Questions" style={{ padding: '6.5rem 0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">Delegate Queries</div>
          <h2 className="section-title">Frequently Asked</h2>
          <p className="section-subtitle">
            Essential information regarding committee matrices, conference protocol, and logistics for The First Flight.
          </p>
        </div>

        {/* Accordion List */}
        <div className="faq-container">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx} 
              className={`faq-item ${openIndex === idx ? 'open' : ''}`}
            >
              <button 
                type="button" 
                className="faq-question"
                onClick={() => toggle(idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
              >
                <span>{faq.q}</span>
                <span className="faq-toggle-icon" aria-hidden="true">
                  {openIndex === idx ? '−' : '+'}
                </span>
              </button>

              {openIndex === idx && (
                <div 
                  id={`faq-answer-${idx}`} 
                  className="faq-answer"
                >
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
