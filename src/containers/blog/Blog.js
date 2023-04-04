import React from 'react'
import { Artical } from '../../components';
import { Blog01, Blog02, Blog03, Blog04, Blog05 } from './blogimeges';
import './Blog.css';

function Blog() {

  return (
    <div className="blog" id='blog'>
      <div className="blog-heading">
        <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
      </div>
      <div className="blog__imagess">
        <div className="blog__imagess-secA">
          <Artical blogImURL={Blog01} date="April 4, 2023"  title="AI is the future. Let us exlore how it is"/>
        </div>
        <div className="blog__imagess-secB">
          <Artical blogImURL={Blog02} date="April 4, 2023" title="AI is the future. Let us exlore how it is" />
          <Artical blogImURL={Blog03} date="April 4, 2023"  title="AI is the future. Let us exlore how it is"/>
          <Artical blogImURL={Blog04} date="April 4, 2023"  title="AI is the future. Let us exlore how it is"/>
          <Artical blogImURL={Blog05} date="April 4, 2023"  title="AI is the future. Let us exlore how it is"/>
        </div>
      </div>
    </div>
  )
}

export default Blog;
