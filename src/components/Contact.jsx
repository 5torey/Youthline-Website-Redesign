import {useState} from 'react'
import axios from 'axios'
import Image9 from '../../public/9.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSquarePhone, faComments, faMobileScreenButton, faEnvelope} from '@fortawesome/free-solid-svg-icons'

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
    testForm.append('your-firstname', firstName)
    testForm.append('your-lastname', lastName)
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
            {/* Email */}
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    onChange={event => setEmail(event.target.value)}
                    value={email}
                    required
                />
            </div>
            {/* Subject */}
            <div>
                <label htmlFor="subject">Subject</label>
                <input
                    type="text"
                    name="subject"
                    onChange={(event) => setSubject(event.target.value)}
                    value={subject}
                    required
                />
            </div>
            {/* Message */}
            <div>
                <label htmlFor="message">Message</label>
                <textarea
                    name="message"
                    onChange={event => setMessage(event.target.value)}
                    value={message}
                    required
                />
            </div>
            {/* Submit Button */}
            <div>
                <button className="submit-button" type="submit">
                    Send a message
                </button> 
            </div>
        </form>
    </>
  )
}

const Contact = () => {

  return (
    <div className="contact-main-container">
      <h2 id='contactTitle'>Contact Us | Whakapā Mai</h2>
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
          <h4>A Guiding Light</h4>
          <h5>Mentors can change your life for the better.</h5>
          <p>Fill out the form to request mentoring.</p>
          <img src={Image9} alt="Girl crying wearing a checkered dress, being comforted by ambigoudly gendered person" />
        </div>
        <div className="contact-form">
          <ContactForm/>
        </div>
      </div>
    </div>
  )
}

export default Contact