import React from 'react';

import './ContactSection.sass';

import ContactImage from './ContactImage/ContactImage';
import ContactInputs from './ContactInputs/ContactInputs';
import ContactMessageBox from './ContactMessageBox/ContactMessageBox';
import ContactSendButton from './ContactSendButton/ContactSendButton';
import SocialLinks from './SocialLinks/SocialLinks';

const ContactSection = () => (
  <form id='ContactSection'>
    <ContactImage />
    <ContactInputs />
    <ContactMessageBox />
    <ContactSendButton />
    <SocialLinks />
  </form>
);

export default ContactSection;