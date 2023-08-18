import React from 'react'
import '../css/Services.scss'
import Image1 from '../../public/2.png'
import Image2 from '../../public/4.png'
import Image3 from '../../public/8.png'

const Services = () => {
  return (
    <div className='services-main-container'>
      {/* Card Container */}
      <div className="card-container">
        {/* Card 1 */}
        <div className="service-card">
        <div className="service-img-1">
        <img src={Image1} alt="Friend symbolically comforting sad friend through a phone" id='serviceimg'/>
        <h5 id='ct1'>It's</h5>
        <h5 id='ct2'>Non-Judgemental</h5>
        <p id='ct3'>Our counsellor's are here for you and will listen without judgement.</p>
        </div>
        </div>
        {/* Card 2 */}
        <div className="service-card">
        <div className="service-img-1">
        <img src={Image2} alt="Friend symbolically comforting sad friend through a phone" id='serviceimg'/>
        <h5 id='ct1'>It's</h5>
        <h5 id='ct2'>Free of Charge</h5>
        <p id='ct3'>Our counselling and mentoring services are free. Support is a necessity, not a fee.</p>
        </div>
        </div>
        {/* Card 3 */}
        <div className="service-card">
        <div className="service-img-1">
        <img src={Image3} alt="Friend symbolically comforting sad friend through a phone" id='serviceimg'/>
        <h5 id='ct1'>It's</h5>
        <h5 id='ct2'>Confidential</h5>
        <p id='ct3'>Our service's are confidential. We take pride in offering a safe space for rangatahi.</p>
        </div>
        </div>
      </div>
      {/* Sub Container */}
      <div className="services-sub-container">
        {/* Title */}
        <h3 className="title">Services | Ratonga</h3>
        <div className="services-text-container">
          {/* Counselling Cont */}
            <div className="service-container">
              <h4>Counselling | Tohutohu</h4>
              <h5 id='ct4'>It's normal to worry about asking for help, but we are here to listen and help you figure out what is right for you.</h5>
              <p>Our counselling services are free and confidential. They are available for free via call, txt, webchat or email. </p>
            </div>
            {/* Service Cont */}
            <div className="service-container">
            <h4>Mentoring | Kaiārahi</h4>
            <h5 id='ct4'>Mentoring is a one-on-one relationship, usually with a youth worker, who will work with you to plan and achieve your goals.</h5>
            <p>A mentor can help you set education goals, create a CV, develop skills to find a job, and build your confidence socially and professionally. Contact Youthline if mentoring sounds right for you.</p>
            </div>
        </div>
      </div>


    </div>
  )
}

export default Services