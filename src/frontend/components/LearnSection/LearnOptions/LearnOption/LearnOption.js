import React from 'react';

import './LearnOption.sass';

import LearnOptionImage from './LearnOptionImage/LearnOptionImage';
import LearnOptionInfo from './LearnOptionInfo/LearnOptionInfo';
import LearnOptionEnquiry from './LearnOptionEnquiry/LearnOptionEnquiry';

const LearnOption = props => (
  <div className='LearnOption'>
    <LearnOptionImage
      imgURL={props.imgURL}
      imgAlt={props.imgAlt}
    />

    {!props.enquiryOpen &&
    <LearnOptionInfo
      title={props.title}
      subtitle={props.subtitle}
      description={props.description}
      showEnquiry={props.showEnquiry}
    />}

    {props.enquiryOpen &&
    <LearnOptionEnquiry hideEnquiry={props.hideEnquiry} makeEnquiry={props.makeEnquiry} />}
  </div>
);

export default LearnOption;