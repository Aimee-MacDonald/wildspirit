import React from 'react';

import './LearnOptions.sass';

import LearnOption from './LearnOption/LearnOption';

const learnOptionsData = [{
  "imgURL": "https://previews.dropbox.com/p/thumb/AA_TWJ4QlgsoLuiKkcJ00vWljW8PZmhcxbcLA1z2xvZMOFvCttskMlcoyIVT36I31QDKe7LiolTNJU45aASNw93MsTTZnogj3ACnt9lqdWsuY0dlnP3TAa-qhpygH-BsRS6kB8pt5GKju96h7pYn5QwdCuLRC-ZFYVksyaSYB-EsYpwrA8OEidq9gYsfjMN_tRpkymyhejDQDH9edmurQJP-44ckAQLqEfoFxno7Wf-rvsyIjrk8Fr_5pVjhBoKYeAIuNpjenvXNCzzpWuWEqzu6f_wRSKQ12YjY0zituutmbq91EJbez2m1C3KCa5aST0gnM_-DzIF0KHaYyeTDfoVi5fH_3UaBo_Hk7Vt2AYLdzQ/p.jpeg?fv_content=true&size_mode=5",
  "imgAlt": "A happy group of friends planting trees together",
  "title": "Reforestation",
  "subtitle": "Recreating the indigenous forest",
  "description": "As part of the Greenpop initiative, we are planting over 300 trees in an area of cleared alien vegetation. Bring all your friends and a picnic basket and come join us in making a real and lasting difference to our natural environment."
}, {
  "imgURL": "https://previews.dropbox.com/p/thumb/AA_Av7zNw5x4DomzV5FIxvzLpZX1iwwn5Ml9uwz_BJzDF5MTWMUYCdzNNa3d_R-mzINbl-QhBUz4szFn39hoSN2YxycYWTCXxMaLi2vwW7P6PJ5T-dx58gPsP2hGdi6STnZQFomMQjlK_WNiCur1FQj5qFthtugwSLIYohUU0uM2P6pkMepvRJXgQWTHK3r0JIKzAN_AQVt7wSyzQjPkYvgiR5xA4Z7A_lHGtlodxcrKhDQDr8ZgUNmyJ0aB14LoEvG32wX_DeN2BE15TD-Q24_gs53fOJHQcViGZTrNGuv3JS4eU1PId0Hq9lrLNn317PX9RTO8t3qM7em4ro5Pty9-OiIcDcfR7Vc2XkG6uT5GjQ/p.jpeg?size=1600x1200&size_mode=3",
  "imgAlt": "A Gardener and his tools meditating with a horse",
  "title": "Concious Gardening",
  "subtitle": "Build the perfect garden and a mind to match it",
  "description": "A healthy mind promotes a healthy environment. A healthy environment promotes a healthy mind. Come join us and start your own journey to a happier, healthier you and a beautiful garden to enjoy it in."
}, {
  "imgURL": "https://previews.dropbox.com/p/thumb/AA9pDqbzNESWbOaZtUKGEhDA_K_kwl3y7xX2QNXGP5NinD-NPovJOo4Axig2wHvYUkJuh5CxFrOj3Bv8SVVQLa1AHYDbFNepYgaajaW9pb8_ljkod9Q1HRY-8huUoXbeCFjuFCk5O3l947H34GYGkr4hTEBRWnZLtRSICBibkMaYU7lrqxgrq2xOCU0YIMneUEJi23Dh8P3owt-gN-JmnzMCC-cD7lGASbPt3C876rZnO90P2XDOBGLZON7YFGC5cM62tdHt-_oQadOquNVhOyJXgpmrDHVxYX09sm0qf-wevBWGryazBNLTlO1D--jtmYfe1Zo0cSI123akCEtw12SQCDHYT-YzZl09MpqP4gFYcg/p.jpeg?fv_content=true&size_mode=5",
  "imgAlt": "A group of people watching a band playing live outside.",
  "title": "Music on the Deck",
  "subtitle": "Live music at Wild Spirit",
  "description": "Join us for an unforgettable night of live music and festivities at wild spirit."
}];

export default class LearnOptions extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      options: []
    };
  }

  render(){
    return(
      <div id='LearnOptions'>
        {this.state.options.map((option, index) => (
          <LearnOption
            key={option.title}
            imgURL={option.imgURL}
            imgAlt={option.imgAlt}
            title={option.title}
            subtitle={option.subtitle}
            description={option.description}
            enquiryOpen={option.enquiryOpen}
            showEnquiry={() => {this.showEnquiry(index)}}
            hideEnquiry={() => {this.hideEnquiry(index)}}
          />
        ))}
      </div>
    );
  }

  componentDidMount(){
    let options = [];

    learnOptionsData.forEach(option => {
      options.push({
        imgURL: option.imgURL,
        imgAlt: option.imgAlt,
        title: option.title,
        subtitle: option.subtitle,
        description: option.description,
        enquiryOpen: false
      });
    });

    this.setState(() => ({options: options}));
  }

  showEnquiry(optionIndex){
    this.setState(prevState => {
      let newState = prevState;
      newState.options[optionIndex].enquiryOpen = true;
      return newState;
    });
  }

  hideEnquiry(optionIndex){
    this.setState(prevState => {
      let newState = prevState;
      newState.options[optionIndex].enquiryOpen = false;
      return newState;
    });
  }
}