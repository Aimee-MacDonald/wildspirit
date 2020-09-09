import React from 'react';
import './LandingPage.sass';

import HomeSection from '../HomeSection/HomeSection';
import AboutSection from '../AboutSection/AboutSection';
import LiveSection from '../LiveSection/LiveSection';
import ParallaxSection from '../ParallaxSection/ParallaxSection';
import LearnSection from '../LearnSection/LearnSection';
import ExploreSection from '../ExploreSection/ExploreSection';
import ContactSection from '../ContactSection/ContactSection';

export default class LandingPage extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <HomeSection />
        <AboutSection />
        <LiveSection />
        <ParallaxSection />
        <LearnSection />
        <ExploreSection />
        <ContactSection />
      </div>
    );
  }
}