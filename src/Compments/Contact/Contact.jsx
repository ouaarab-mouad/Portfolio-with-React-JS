import React from 'react'
import './Contact.css'
import theme_pattern from '../../pucture/theme_pattern.svg'
import mail_icon from '../../pucture/mail_icon.svg'
import location_icon from '../../pucture/location_icon.svg'
import call_icon from '../../pucture/call_icon.svg'


const Contact = () => {
  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Contact</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-lift">
          <h1>Let's Talk</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate nobis perferendis eum quaerat, tempore nemo quo, corporis, quasi soluta illo atque sequi asperiores excepturi numquam dignissimos nihil? Nesciunt, neque dignissimos!</p>
          <div className="contact-details">
              <div className="contact-detail"> 
                <img src={mail_icon} alt="" /><p>warabmoad@gmail.com</p>
              </div>
              <div className="contact-detail">
                  <img src={call_icon} alt="" /> <p>+212 644547293</p>
              </div>
              <div className="contact-detail">
                <img src={location_icon} alt="" />
                <p>Morocco,Marrakesh,Tahannoute </p>
              </div>
          </div>
        </div>
        <form className='contact-right'>
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter your name' name='name'/>
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder='Enter your Email' name='email'/>
          <label htmlFor="">Write Your Messge Here</label>
          <textarea name="message" id="message" rows={8} placeholder='Enter your message'></textarea>
          <button type='submit' className="contact-submit">Submit Now</button>
        </form>
      </div>
    </div>
  )
}
export default Contact;
