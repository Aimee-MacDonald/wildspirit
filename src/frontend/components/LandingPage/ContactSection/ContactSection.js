import React from 'react';

import './ContactSection.sass';

import ContactImage from './ContactImage/ContactImage';
import ContactInputs from './ContactInputs/ContactInputs';
import ContactMessageBox from './ContactMessageBox/ContactMessageBox';
import ContactSendButton from './ContactSendButton/ContactSendButton';
import ContactSocialLinks from './ContactSocialLinks/ContactSocialLinks';

export default class ContactSection extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <form id='ContactSection' onSubmit={this.sendMessage}>
        <ContactImage />
        <div id='contactContent'>
          <ContactMessageBox />
          <div id='contactSmallContent'>
            <ContactInputs />
            <ContactSendButton />
            <ContactSocialLinks />
          </div>
        </div>
      </form>
    )
  }

  sendMessage(event){
    event.preventDefault();

    const formData = {
      'name': event.target.CIName.value,
      'email': event.target.CIEmail.value,
      'message': event.target.CIMessage.value
    }

    fetch('/api/sendMessage', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({'message': formData})
    })
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log(error))
  }
}