import React from 'react'
import Feature from '../../components/feature/Feature';
import './Features.css'

const FeaturesItem = [
  { title: 'Improvinf and distrusts intantly', text: 'gbvvffdyyyyyyyyyyyyyyyyyyy' },
  { title: 'gfyyyyyyyytfff', text: 'regergwgre' },
  { title: 'Improvinf and distrusts intantly', text: 'ddddddddddh' },
  { title: 'Improvinf and distrusts intantly', text: 'rggg34g' },
]

function Features() {
  return (
    <div className="features">
      <div className="features_heading">
        <h1 className="gradient__text">The Future is Now and You Just Need To Realize It.Step In Future Today & Make It Happen. </h1>
        <p>Request Early Assess Go To The Started</p>
      </div>
      <div className="features_container">
        {FeaturesItem.map((item, index) => (
          <Feature title={item.text} text={item.text} key={item.title + index}></Feature>
        ))};
      </div>
    </div>
  )
}

export default Features
