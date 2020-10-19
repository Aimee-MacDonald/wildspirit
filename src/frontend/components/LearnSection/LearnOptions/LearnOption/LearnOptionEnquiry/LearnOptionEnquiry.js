import React from 'react';

import './LearnOptionEnquiry.sass';

const LearnOptionEnquiry = props => (
  <form className='LearnOptionEnquiry'>
    <label for='LOEName'>Name:</label>
    <input id='LOEName' required></input>

    <label for='LOEEmail'>Email:</label>
    <input id='LOEEmail' type='email' required></input>

    <label for='LOEMessage'>Message:</label>
    <textarea id='LOEMessage'></textarea>

    <button onClick={props.hideEnquiry}>Cancel</button>
    <button>Send</button>
  </form>
);

export default LearnOptionEnquiry;