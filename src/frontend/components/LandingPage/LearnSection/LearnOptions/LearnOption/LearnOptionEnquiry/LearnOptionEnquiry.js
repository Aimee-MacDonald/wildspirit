import React from 'react';

import './LearnOptionEnquiry.sass';

const LearnOptionEnquiry = props => (
  <form className='LearnOptionEnquiry' onSubmit={props.makeEnquiry}>
    <label htmlFor='LOEName'>Name:</label>
    <input id='LOEName' name='LOEName' required></input>

    <label htmlFor='LOEEmail'>Email:</label>
    <input id='LOEEmail' type='email' name='LOEEmail' required></input>

    <label htmlFor='LOEMessage'>Message:</label>
    <textarea id='LOEMessage' name='LOEMessage'></textarea>

    <input value={props.eventName} name={'LOEEvent'} hidden={true} readOnly={true}></input>

    <div className='LOEButtons'>
      <button onClick={props.hideEnquiry}>Cancel</button>
      <button type="submit">Send</button>
    </div>

  </form>
);

export default LearnOptionEnquiry;