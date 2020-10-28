import React from 'react';

import './ContactMessageBox.sass';

const ContactMessageBox = () => (
  <div id='ContactMessageBox'>
    <label htmlFor='contactMessage'>Message</label>
    <textarea id='contactMessage' name='CIMessage' placeholder='Message' />
  </div>
);

export default ContactMessageBox;