import React from 'react'

import './HomeSection.sass'

import HeroText from './HeroText/HeroText'
import SocialLinks from './SocialLinks/SocialLinks'
import WeatherWidget from './WeatherWidget/WeatherWidget'

const HomeSection = () => (
  <div id='HomeSection'>
    <br/>
    <HeroText/>
    <div id='homeWidgets'>
      <WeatherWidget/>
      <SocialLinks/>
    </div>
  </div>
)

export default HomeSection