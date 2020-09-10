import React from 'react';

import './LiveSection.sass';

import LiveSectionHeading from './LiveSectionHeading/LiveSectionHeading';
import AccommodationOptions from './AccommodationOptions/AccommodationOptions';

const LiveSection = () => (
  <div id='LiveSection'>
    <LiveSectionHeading />
    <AccommodationOptions />
  </div>
);

export default LiveSection;