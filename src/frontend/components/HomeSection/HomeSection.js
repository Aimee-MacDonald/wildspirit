import React from 'react';

import './HomeSection.sass';

import HeroImage from './HeroImage/HeroImage';
import HeroText from './HeroText/HeroText';
import Navigation from './Navigation/Navigation';
import SocialLinks from './SocialLinks/SocialLinks';
import WeatherWidget from './WeatherWidget/WeatherWidget';

const HomeSection = () => (
  <div id='HomeSection'>
    <HeroImage />
    <HeroText />
    <Navigation />
    <SocialLinks />
    <WeatherWidget />
  </div>
);

export default HomeSection;