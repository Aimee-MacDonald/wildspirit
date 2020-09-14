import React from 'react';

import './MessageField.sass';

const MessageField = props => (
  <div className='MessageField'>
    <label htmlFor={props.accommodationType + '_message'}>Message: </label>
    <textarea id={props.accommodationType + '_message'}></textarea>
  </div>
);

export default MessageField;