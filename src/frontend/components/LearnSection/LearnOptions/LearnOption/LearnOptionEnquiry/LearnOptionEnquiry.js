import React from 'react';

import './LearnOptionEnquiry.sass';

const LearnOptionEnquiry = props => (
  <form className='LearnOptionEnquiry'>
    <input></input>
    <input></input>
    <textarea></textarea>
    <button onClick={props.hideEnquiry}>Cancel</button>
    <button>Send</button>
  </form>
);

export default LearnOptionEnquiry;