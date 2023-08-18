import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import HeroImage from '../../public/1.png'
import '../css/Hero.scss'


const Hero = () => {
  return (
    <div className='hero-container'>
        <div className="hero-text">
          <div className="heading-container">
            <h1 id='hero-heading'>You can make a difference</h1>
            </div>
            <h2 id='hero-sub'>Donate now to provide life-changing support to rangatahi in need</h2>
            <div className="hero-donate-btn">
            <button id='hero-donate'><Link to='/store'><p id='donate2'>Donate</p></Link></button>
            </div>
        </div>
        <div className="hero-image">
            <img src={HeroImage} id='hero-image' alt="Friend symbolically comforting sad friend through a phone" />
        </div>
    </div>
  )
}

export default Hero