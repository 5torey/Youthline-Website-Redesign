import {useState} from 'react'
import axios from 'axios'
import Image9 from '../../public/9.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSquarePhone, faComments, faMobileScreenButton, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import '../css/Contact.scss'




// Form Endpoint
const formEndpoint = import.meta.env.VITE_APP_WP_API_FORM_ENDPOINT;

// Contact Form
const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const testForm = new FormData();
    testForm.append('firstName', firstName)
    testForm.append('lastName', lastName)
    testForm.append('your-subject', subject)
    testForm.append('your-email', email)
    testForm.append('your-message', message)

    axios.post(formEndpoint, testForm, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(function (response){
      setSubmitted(true);
      console.log(response);
    })
    .catch(function(error) {
      console.error(error);
      setError(true)
    })

  }

  if (submitted) {
    return (
      <>
      <h3>Thank you for your message</h3>
      <p> We'll be in touch soon</p>
      </>
    )
  }


  if (error) {
    return (
      <>
      <h3>Sorry, there was an error</h3>
      <p>We were unable to send your message</p>
      </>
    )
  }

  return (
    <>
     <form
            onSubmit={handleSubmit}
            method="POST"
        >
          {/* First Name */}
            <div className='row' id='nameInput'>
              <div>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    name="firstName"
                    onChange={(event) => setFirstName(event.target.value)}
                    value={firstName}
                    required
                />
                </div>
                {/* Last Name */}
                <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    onChange={(event) => setLastName(event.target.value)}
                    value={lastName}
                    required
                />
            </div>
            </div>
            {/* Email */}
            <div id='cf1'>
                <label htmlFor="email">Email</label>
                <input id='email'
                    type="email"
                    name="email"
                    onChange={event => setEmail(event.target.value)}
                    value={email}
                    required
                />
            </div>
            {/* Subject */}
            <div id='cf2'>
                <label htmlFor="subject">Subject</label>
                <input id='subject'
                    type="text"
                    name="subject"
                    onChange={(event) => setSubject(event.target.value)}
                    value={subject}
                    required
                />
            </div>
            {/* Message */}
            <div id='cf3'>
                <label htmlFor="message">Message</label>
                <textarea id='message'
                    name="message"
                    onChange={event => setMessage(event.target.value)}
                    value={message}
                    required
                />
            </div>
            {/* Submit Button */}
            <div>
                <button id='submit-button' className="submit-button" type="submit">
                    Submit
                </button> 
            </div>
        </form>
    </>
  )
}

const Contact = () => {

  return (
    
    <div className="contact-main-container">
      <h3>Contact Us | Whakapā Mai</h3>
      <div className="contact-blobs-container">
      <div className="contact-blob">
      <FontAwesomeIcon icon={faSquarePhone} />
      <h5>0800 376 633</h5>
      </div>
      <div className="contact-blob">
      <FontAwesomeIcon icon={faComments} />
      <h5>Webchat</h5>
      </div>
      <div className="contact-blob">
      <FontAwesomeIcon icon={faMobileScreenButton} />
      <h5>234</h5>
      </div>
      <div className="contact-blob">
      <FontAwesomeIcon icon={faEnvelope} />
      <h5>talk@youthline.co.nz</h5>
      </div>
      </div>
      <div className="contact-form-container">
        <div className="contact-form-text">
          <h4 id='ft1'>A Guiding Light</h4>
          <h5 id='ft2'>Mentors can change your life for the better.</h5>
          <p id='ft3'>Fill out the form to request mentoring.</p>
          <img id='cfimg' src={Image9} alt="Girl crying wearing a checkered dress, being comforted by ambigoudly gendered person" />
        </div>
        <div className="contact-form">
          <ContactForm/>
        </div>
      </div>
    </div>
  )
}

export default Contact