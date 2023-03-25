import React from 'react'
import { google, shopify, slack, atlassian, dropbox } from './index'
import './Brand.css'
function Brand() {
  return (
    <div className="brands">
      <div >
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>
      <div >
        <img src={dropbox} alt="dropbox" />
      </div>
      <div >
        <img src={shopify} alt="shopyfy" />
      </div>
    </div>
  )
}

export default Brand
