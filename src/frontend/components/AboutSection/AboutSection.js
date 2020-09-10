import React from 'react';

import './AboutSection.sass';

import AboutImage from './AboutImage/AboutImage';
import AboutText from './AboutText/AboutText';

const AboutSection = () => (
  <div id='AboutSection'>
    <AboutImage />
    <AboutText />
  </div>
);

export default AboutSection;