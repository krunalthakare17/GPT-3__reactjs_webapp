import React from 'react'
import './App.css'

import { Artical, Brand, Cta, Navbar } from './components';
import { Blog, Features, Footer, Header, Possibility, WhatGPT3, } from './containers';

function App() {
  return (
    <div className='App'>
      <div className="gradient__bg">
        <Navbar></Navbar>
        <Header></Header>
        <Brand></Brand>
        <WhatGPT3></WhatGPT3>
        <Features></Features>
        <Possibility></Possibility>
        <Cta></Cta>
        <Blog></Blog>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App
