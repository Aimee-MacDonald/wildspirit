import React from 'react';

const MessageField = props => (
  <div>
    <label htmlFor={props.accommodationType + '_message'}>Message: </label>
    <textarea id={props.accommodationType + '_message'}></textarea>
  </div>
);

export default MessageField;