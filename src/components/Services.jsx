import React from 'react'
import '../css/Services.css'
import Image1 from '../../public/2.png'
import Image2 from '../../public/4.png'
import Image3 from '../../public/8.png'

const Services = () => {
  return (
    <div className='services-main-container'>
      <div className="card-container">
        {/* Card 1 */}
        <div className="service-card">
        <div className="service-img-1">
        <img src={Image1} alt="Friend symbolically comforting sad friend through a phone"/>
        <h5>It's</h5>
        <h5>Non-Judgemental</h5>
        <p>Our counsellor's are here for you and will listen without judgement.</p>
        </div>
        </div>
        {/* Card 2 */}
        <div className="service-card">
        <div className="service-img-1">
        <img src={Image2} alt="Friend symbolically comforting sad friend through a phone"/>
        <h5>It's</h5>
        <h5>Non-Judgemental</h5>
        <p>Our counsellor's are here for you and will listen without judgement.</p>
        </div>
        </div>
        {/* Card 3 */}
        <div className="service-card">
        <div className="service-img-1">
        <img src={Image3} alt="Friend symbolically comforting sad friend through a phone"/>
        <h5>It's</h5>
        <h5>Non-Judgemental</h5>
        <p>Our counsellor's are here for you and will listen without judgement.</p>
        </div>
        </div>
      </div>
      <div className="services-sub-container">
        <h2 className="title">Services | Ratonga</h2>
        <div className="services-text-container">
            <div className="service-container">
              <h3>Counselling | Tohutohu</h3>
              <h4>It's normal to worry about asking for help, but we are here to listen and help you figure out what is right for you.</h4>
              <p>Our counselling services are free and confidential. They are available for free via call, txt, webchat or email. </p>
            </div>
            <div className="service-container">
            <h3>Mentoring | Kaiārahi</h3>
            <h4>Mentoring is a one-on-one relationship, usually with a youth worker, who will work with you to plan and achieve your goals.</h4>
            <p>A mentor can help you set education goals, create a CV, develop skills to find a job, and build your confidence socially and professionally. Contact Youthline if mentoring sounds right for you.</p>
            </div>
        </div>
      </div>


    </div>
  )
}

export default Services