import React from 'react';

import './ContactInputs.sass';

const ContactInputs = () => (
  <div id='ContactInputs'>
    <label htmlFor='ContactInputs-name'>Name</label>
    <input id='ContactInputs-name' placeholder='Name' />

    <label htmlFor='ContactInputs-email'>Email</label>
    <input id='ContactInputs-email' placeholder='Email' />
  </div>
);

export default ContactInputs;