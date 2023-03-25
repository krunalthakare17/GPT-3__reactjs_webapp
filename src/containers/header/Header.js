import React from 'react'
import './Header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'


function Header() {
  return (
    <div className="header section-padding" id='name'>
      <div className="header__container">
        <h1 className='gradient__text'>Let's Build Something Amazing With GPT3 Open AI</h1>
        <p>The first version of GPT was released in 2018 and contained 117 million parameters. The second version of the model, GPT-2, was released in 2019 with around 1.5 billion parameters. As the latest version, GPT-3 jumps over the last model by a huge margin with over 175 billion parameters, which is more than 100 times its predecessor and ten times more than comparable programs.</p>

        <div className="header__container-input">
          <input type="email" placeholder='Enter Your Email' />
          <button type='button'>Get Started</button>
        </div>

        <div className="header__container-input_people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="header-image">
        <img src={ai} alt="AI" />
      </div>
    </div>
  )
}

export default Header
