import React from 'react';

import './LearnOptions.sass';

import LearnOption from './LearnOption/LearnOption';

const learnOptionsData = [{
  "imgURL": "https://res.cloudinary.com/dcmdpotqs/image/upload/v1602604754/LearnOptions/IMG-20200808-WA0026_jokxd5.jpg",
  "imgAlt": "A happy group of friends planting trees together",
  "title": "Reforestation",
  "subtitle": "Recreating the indigenous forest",
  "description": "As part of the Greenpop initiative, we are planting over 300 trees in an area of cleared alien vegetation. Bring all your friends and a picnic basket and come join us in making a real and lasting difference to our natural environment."
}, {
  "imgURL": "https://res.cloudinary.com/dcmdpotqs/image/upload/v1602604745/LearnOptions/Bush_camp_sign_20_mdesil.jpg",
  "imgAlt": "A Gardener and his tools meditating with a horse",
  "title": "Concious Gardening",
  "subtitle": "Build the perfect garden and a mind to match it",
  "description": "A healthy mind promotes a healthy environment. A healthy environment promotes a healthy mind. Come join us and start your own journey to a happier, healthier you and a beautiful garden to enjoy it in."
}, {
  "imgURL": "https://res.cloudinary.com/dcmdpotqs/image/upload/v1602604744/LearnOptions/Bush_camp_sign_18_jkco8r.jpg",
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