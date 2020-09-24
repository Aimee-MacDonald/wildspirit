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
    <ContactInputs />
    <ContactMessageBox />
    <ContactSendButton />
    <ContactSocialLinks />
  </form>
);

export default ContactSection;