import React from 'react';
import {FacebookShareButton, FacebookIcon} from 'react-share';

import './LearnOptionInfo.sass';

const LearnOptionInfo = props => (
  <div className='LearnOptionInfo'>
    <div className='learnInfoTitle'>
      <h3>{props.title}</h3>
      <p>{props.subtitle}</p>
    </div>

    <p className='learnInfoDescription'>{props.description}</p>

    <div className='learnInfoControls'>
      <button className='learnOptionBookButton' onClick={props.showEnquiry}>Book</button>
      <FacebookShareButton
        url={'https://wildspiritlodge.herokuapp.com/#LearnSection'}
        quote={`${props.title}: ${props.subtitle}`}
        hashtag='#wildspirit'>
          <FacebookIcon size={36} />
      </FacebookShareButton>
    </div>
  </div>
);

export default LearnOptionInfo;