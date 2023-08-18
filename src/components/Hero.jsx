import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import HeroImage from '../../public/1.png'
import '../css/Hero.css'


const Hero = () => {
  return (
    <div className='hero-container'>
        <div className="hero-text">
            <h2>You can make a difference</h2>
            <h3>Donate now to provide life-changing support to rangatahi in need</h3>
            <Link to='/store'><h4 id='hero-donate'>Donate</h4></Link>
        </div>
        <div className="hero-image">
            <img src={HeroImage} alt="Friend symbolically comforting sad friend through a phone" />
        </div>
    </div>
  )
}

export default Hero