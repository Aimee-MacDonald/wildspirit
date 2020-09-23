import React from 'react';

import './LearnOption.sass';

import LearnOptionImage from './LearnOptionImage/LearnOptionImage';
import LearnOptionInfo from './LearnOptionInfo/LearnOptionInfo';

const LearnOption = props => (
  <div className='LearnOption'>
    <LearnOptionImage
      imgURL={props.imgURL}
      imgAlt={props.imgAlt}
    />

    <LearnOptionInfo
      title={props.title}
      subtitle={props.subtitle}
      description={props.description}
    />
  </div>
);

export default LearnOption;