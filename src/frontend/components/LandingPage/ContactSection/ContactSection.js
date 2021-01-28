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

    this.state = {
      formActive: true,
      messageLoading: false,
      messageSucceed: false,
      messageFail: false
    }

    this.sendMessage = this.sendMessage.bind(this);
  }

  render(){
    return(
      <div id='ContactSection' onSubmit={this.sendMessage}>
        <ContactImage />

        {this.state.formActive &&
          <form id='contactContent'>
            <ContactMessageBox />
            <div id='contactSmallContent'>
              <ContactInputs />
              <ContactSendButton />
              <ContactSocialLinks />
            </div>
          </form>
        }

        {this.state.messageLoading &&
          <div className='messageLoading'>
            <div className='spinner'><div></div></div>
            <h1>Loading</h1>
          </div>
        }

        {this.state.messageSucceed &&
          <div className='messageSucceed'>
            <h1>Success</h1>
            <p>Thank you for your enquiry, we will respond to you as soon as possible.</p>
          </div>
        }

        {this.state.messageFail &&
          <div className='messageFail'>
            <h1>Fail</h1>
            <p>An error occured, please check your connection and try again.</p>
          </div>
        }
      </div>
    )
  }

  sendMessage(event){
    event.preventDefault();

    this.setState(() => ({
      formActive: false,
      messageLoading: true,
      messageSucceed: false,
      messageFail: false
    }));

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
    .then(result => {
      if(result === 'Success'){
        this.setState(() => ({
          formActive: false,
          messageLoading: false,
          messageSucceed: true,
          messageFail: false
        }));
      } else {
        this.setState(() => ({
          formActive: false,
          messageLoading: false,
          messageSucceed: false,
          messageFail: true
        }));
      }
    })
    .catch(error => {
      this.setState(() => ({
        formActive: false,
          messageLoading: false,
          messageSucceed: false,
          messageFail: true
      }));
    })
  }
}