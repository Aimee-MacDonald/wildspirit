import React from 'react';

import './HomeSection.sass';

import HeroText from './HeroText/HeroText';
import Navigation from './Navigation/Navigation';
import SocialLinks from './SocialLinks/SocialLinks';
import WeatherWidget from './WeatherWidget/WeatherWidget';

const HomeSection = () => (
  <div id='HomeSection'>
    <Navigation/>
    <HeroText/>
    <div id='homeWidgets'>
      <WeatherWidget/>
      <SocialLinks/>
    </div>
  </div>
);

export default HomeSection;

/*
  <HeroImage />
  <div id='homeContent'>
    <Navigation />
    <HeroText />
    <div id='homeWidgets'>
      <WeatherWidget />
      <SocialLinks />
    </div>
  </div>
*/

/*
  #HomeSection
    width: 100vw
    height: 110vh
    position: relative
    display: flex
    flex-flow: nowrap column
    justify-content: space-around
    align-items: center
    #homeContent
      position: absolute
      z-index: 2
      margin-top: -5rem
      width: 80%
      height: 80%
      display: flex
      flex-flow: nowrap column
      justify-content: space-between
      #homeWidgets
        display: flex
        align-items: center
        justify-content: space-between
*/