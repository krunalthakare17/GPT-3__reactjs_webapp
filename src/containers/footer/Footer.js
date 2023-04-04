import React from 'react'
import './Footer.css';
import logogpt3 from "../../assets/logo.svg"


function Footer() {
  return (
    <div className="footer-main section__padding">
      <div className="footer-heading">
        <h1 className="gradient__text">Do you want to step in to the future before others </h1>
      </div>
      <div className="footer-heading-para">
        <p>Request Early Access</p>
      </div>
      <div className="footer-last">
        <div className="footer-last_logo">
          <img src={logogpt3} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
        </div>
        <div className="footer-last-links">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="footer-last-links">
          <h4>Company</h4>
          <p>Term & conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="footer-last-links">
          <h4>Get In  Touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb,</p>
          <p>+91 991 234 5678</p>
          <p>chatgpt3@info.net</p>
        </div>
      </div>
      <div className="footer-last-copyright">
        <p>@2023 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
