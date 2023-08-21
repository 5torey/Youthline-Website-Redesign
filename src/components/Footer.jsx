import React from 'react'
import Logo from '../../public/assets/ytlogoblack.svg'
import {Link} from 'react-router-dom'
import '../css/Footer.scss'

const Footer = () => {
  return (
    <div className="footer-main-container">
      <div className="newsletter-container">
      <h4 id='signup'>Sign up to our newsletter</h4>
      <p>Email address</p>
      <div>
      <input type="text" className='newsletter-input'/>
      </div>
      <div>
      <button id='subscribe-btn'>Subscribe</button>
      </div>
      </div>
      <div className="footer-nav-container">
        <div>
      <ul id='footmenu'>
          <li id='footlink'>
            <Link to="/services">Services</Link>
          </li>
          <li id='footlink'>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li id='footlink'>
            <Link to="/about">About Us</Link>
          </li>
          <li id='footlink'>
            <Link to="/store">Store</Link>
          </li>
        </ul>
        </div>
        <div id='social-links'>
        <i id='smicon' className="fa-brands fa-facebook fa-xl"></i>
        <i id='smicon' className="fa-brands fa-twitter fa-xl"></i>
        <i id='smicon' className="fa-brands fa-youtube fa-xl"></i>
        <i id='smicon' className="fa-brands fa-instagram fa-xl"></i>
        </div>
      </div>
      <div className="logo-container">
      <img id='ytflogo' src={Logo} alt="Youthline Logo" />
      </div>
    </div>
  )
}

export default Footer