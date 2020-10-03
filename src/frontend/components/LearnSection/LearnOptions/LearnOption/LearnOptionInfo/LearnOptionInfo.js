import React from 'react';

import './LearnOptionInfo.sass';

const LearnOptionInfo = props => (
  <div className='LearnOptionInfo'>
    <p>{props.title}</p>
    <p>{props.subtitle}</p>
    <p>{props.description}</p>
    <p>Share Links</p>
    <button onClick={props.showEnquiry}>Book</button>
  </div>
);

export default LearnOptionInfo;