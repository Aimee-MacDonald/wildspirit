import React from 'react';

import ContactImage from './ContactImage/ContactImage';
import Inputs from './Inputs/Inputs';
import MessageBox from './MessageBox/MessageBox';
import SendButton from './SendButton/SendButton';
import SocialLinks from './SocialLinks/SocialLinks';

const ContactSection = () => (
  <div>
    <ContactImage />
    <Inputs />
    <MessageBox />
    <SendButton />
    <SocialLinks />
  </div>
);

export default ContactSection;