import React from 'react';

import './ParallaxSection.sass';

import ParallaxImage from './ParallaxImage/ParallaxImage';
import ParallaxText from './ParallaxText/ParallaxText';

const ParallaxSection = () => (
  <div id='ParallaxSection'>
    <ParallaxImage />
    <ParallaxText />
  </div>
);

export default ParallaxSection;