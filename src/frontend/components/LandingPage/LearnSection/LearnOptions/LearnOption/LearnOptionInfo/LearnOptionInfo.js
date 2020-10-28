import React from 'react';

import './LearnOptionInfo.sass';

const LearnOptionInfo = props => (
  <div className='LearnOptionInfo'>
    <div className='learnInfoTitle'>
      <h3>{props.title}</h3>
      <p>{props.subtitle}</p>
    </div>

    <p className='learnInfoDescription'>{props.description}</p>

    <div className='learnInfoControls'>
      <button onClick={props.showEnquiry}>Book</button>
      <p>Share Links</p>
    </div>
  </div>
);

export default LearnOptionInfo;