import React from 'react'
import Image5 from '../../public/5.png'
import '../css/About.scss'

const About = () => {
  return (
    <div className="about-container">
      <div className="about-text-container">
        <div className='about-info'>
      <h2 className='title' id='ab-title'>About Youthline | Mo Tatou</h2>
      <h5 className='about-text' id='ab-text'>Youthline offers a free Helpline service via phone, txt,  webchat, and email. Our  services also include counselling and youth mentoring, to help rangatahi grow and develop.</h5>
      <p>Youthline is a registered charity and we rely on the generous support of our partners, funders and supporters to continue to provide support to young New Zealanders.</p>
      </div>
      {/* Image */}
      <div className="about-image container">
        <img src={Image5} alt="Two male friends comforting eachother while sad" id='about-img'/>
      </div>
      </div>
    </div>
  )
}

export default About