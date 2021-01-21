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
      <div class="fb-share-button" data-href="https://wildspiritlodge.herokuapp.com/#LearnSection" data-layout="button" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwildspiritlodge.herokuapp.com%2F%23LearnSection&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
    </div>
  </div>
);

export default LearnOptionInfo;