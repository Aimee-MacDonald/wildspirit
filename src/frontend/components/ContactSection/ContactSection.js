import React from 'react';

import './ContactSection.sass';

import ContactImage from './ContactImage/ContactImage';
import ContactInputs from './ContactInputs/ContactInputs';
import ContactMessageBox from './ContactMessageBox/ContactMessageBox';
import ContactSendButton from './ContactSendButton/ContactSendButton';
import ContactSocialLinks from './ContactSocialLinks/ContactSocialLinks';

const ContactSection = () => (
  <form id='ContactSection'>
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
);

export default ContactSection;