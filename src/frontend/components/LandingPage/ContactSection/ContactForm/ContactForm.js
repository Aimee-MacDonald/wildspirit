import React, { useState } from 'react'

import './ContactForm.sass'

import ContactSocialLinks from './ContactSocialLinks/ContactSocialLinks'

const ContactForm = () => {
  const messageStates = [
    'normal',
    'sending',
    'success',
    'fail'
  ]

  const [messageStatus, setMessageStatus] = useState(0)

  const sendMessage = e => {
    e.preventDefault()
    setMessageStatus(messageStates.indexOf('sending'))

    fetch('/api/sendMessage', {
      method: 'post',
      body: new FormData(e.target)
    }).then(res => res.json())
      .then(result => {
        if(result === 'Success'){
          setMessageStatus(messageStates.indexOf('success'))
        } else {
          setMessageStatus(messageStates.indexOf('fail'))
        }
      })
      .catch(error => setMessageStatus(messageStates.indexOf('fail')))
  }

  return (
    <div id='ContactForm'>
      {messageStatus === messageStates.indexOf('normal') &&
        <form onSubmit={sendMessage}>
          <div className='labeled'>
            <label htmlFor='message'>Message</label>
            <textarea id='message' name='message' required/>
          </div>

          <div className='smaller'>
            <div className='labeled'>
              <label htmlFor='name'>Name</label>
              <input id='name' name='name' required/>
            </div>

            <div className='labeled'>
              <label htmlFor='email'>Email</label>
              <input id='email' name='email' type='email' required/>
            </div>

            <button type='submit'>Send</button>

            <ContactSocialLinks/>
          </div>
        </form>
      }

      {messageStatus === messageStates.indexOf('sending') &&
        <div className='message'>
          <div className='spinner'><div></div></div>
          <h1>sending</h1>
        </div>
      }

      {messageStatus === messageStates.indexOf('success') &&
        <div className='message'>
          <h1>Success</h1>
          <p>Thank you for your message</p>
        </div>
      }

      {messageStatus === messageStates.indexOf('fail') &&
        <div className='message'>
          <h1>Failed</h1>
          <p>Please try again later</p>
        </div>
      }
    </div>
  )
}

export default ContactForm