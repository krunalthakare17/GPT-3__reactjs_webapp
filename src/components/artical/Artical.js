import React from 'react'
import './Artical.css';
function Artical({ blogImURL, date, title }) {
  return (
    <div className="blog__artical">
      <div className="blog__artical-img">
        <img src={blogImURL} alt="blaog__img" />
      </div>
      <div className="blog__artical-container">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Artical</p>
      </div>
    </div>
  )
}

export default Artical;
