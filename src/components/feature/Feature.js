import React from 'react'
import './Feature.css';
function Feature({ title, text }) {
  return (
    <div className="feature " >
      <div className="features_title">

        <div />

        <h1>{title}</h1>
      </div>
      <div className="features_text">
        <p> {text}</p>
      </div>
    </div>
  )
}

export default Feature;

