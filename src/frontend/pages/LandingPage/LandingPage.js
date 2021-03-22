import React from 'react';

import HomeSection from '../../components/LandingPage/HomeSection/HomeSection';
import AboutSection from '../../components/LandingPage/AboutSection/AboutSection';
import LiveSection from '../../components/LandingPage/LiveSection/LiveSection';
import ParallaxSection from '../../components/LandingPage/ParallaxSection/ParallaxSection';
import LearnSection from '../../components/LandingPage/LearnSection/LearnSection';
import ExploreSection from '../../components/LandingPage/ExploreSection/ExploreSection';
import ContactSection from '../../components/LandingPage/ContactSection/ContactSection';
import Footer from '../../components/LandingPage/Footer/Footer';

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
        <Footer />
      </div>
    );
  }
}