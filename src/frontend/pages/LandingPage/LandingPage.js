import React from 'react';

import Navigation from '../../components/LandingPage/Navigation/Navigation';
import HomeSection from '../../components/LandingPage/HomeSection/HomeSection';
import AboutSection from '../../components/LandingPage/AboutSection/AboutSection';
import LiveSection from '../../components/LandingPage/LiveSection/LiveSection';
import ParallaxSection from '../../components/LandingPage/ParallaxSection/ParallaxSection';
import LearnSection from '../../components/LandingPage/LearnSection/LearnSection';
import ExploreSection from '../../components/LandingPage/ExploreSection/ExploreSection';
import ContactSection from '../../components/LandingPage/ContactSection/ContactSection';

export default class LandingPage extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Navigation />
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