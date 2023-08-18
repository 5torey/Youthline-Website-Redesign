import React from 'react'
import Logo from '../../public/assets/ytlogoblack.svg'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className="footer-main-container">
      <div className="newsletter-container">
      <h4>Sign up to our newsletter</h4>
      <b>Email address</b>
      <input type="text" className='newsletter-input'/>
      <button id='subscribe-btn'>Subscribe</button>
      </div>
      <div className="footer-nav-container">
      <p>Services</p>
      <p>Contact Us</p>
      <p>About Us</p>
      <p>Store</p>
      <FontAwesomeIcon icon={faFacebook} />
      <FontAwesomeIcon icon={faTwitter} />
      <FontAwesomeIcon icon={faYoutube} />
      <FontAwesomeIcon icon={faInstagram} />
      </div>
      <div className="logo-container">
      <img src={Logo} alt="Youthline Logo" />
      </div>
    </div>
  )
}

export default Footer