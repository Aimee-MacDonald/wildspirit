import React from 'react';

import './LearnOptionImage.sass';

const LearnOptionImage = props => (
  <div className='LearnOptionImage'>
    <img src={props.imgURL} alt={props.imgAlt} />
  </div>
);

export default LearnOptionImage;