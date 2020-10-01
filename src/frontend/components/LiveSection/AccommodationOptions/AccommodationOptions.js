import React from 'react';

import './AccommodationOptions.sass'

import AccommodationOption from './AccommodationOption/AccommodationOption';


const accommodationData = [
  {
    "title": "DORMS",
    "description": "Our spacious, bunk-free dormitories sleep up to 8 people in comfortable single beds. Each dorm has en-suite bathroom facilities and a sun deck overlooking the mountains and indigenous forests of the Tsitsikamma National Park"
  }, {
    "title": "DOUBLE ROOMS",
    "description": "We have a range of private double and twin bedrooms, most of which have en-suite bathroom facilities and a view of the mountains and forests. Ideal for couples or friends travelling together"
  }, {
    "title": "TWIN ROOMS",
    "description": "We have a range of private double and twin bedrooms, most of which have en-suite bathroom facilities and a view of the mountains and forests. Ideal for couples or friends travelling togethe"
  }, {
    "title": "FAMILY ROOMS",
    "description": "Our private en-suite family rooms can comfortably sleep between 4 to 8 people. Ideal for families or a group of friend"
  }, {
    "title": "SAFARI TENTS",
    "description": "Our pre-pitched 3x3m canvas Safari tents are located in the forest garden and provide ideal budget accommodation for up to two people sharing. We offer double or twin bed options with shared bathroom facilities in the main Farmhouse"
  }, {
    "title": "FOREST CAMPING",
    "description": "Pitch your own tent under the stars and enjoy the experience of our off-the-grid Campsite including composting toilets. Communal fire-pits for cooking are located near the rustic self-catering bush kitchen"
  }
];

export default class AccommodationOptions extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      options: []
    };
    
    this.growOption = this.growOption.bind(this);
    this.shrinkOption = this.shrinkOption.bind(this);
    this.showDescription = this.showDescription.bind(this);
    this.hideDescription = this.hideDescription.bind(this);
  }

  render(){
    return(
      <div id='AccommodationOptions'>
        {this.state.options.map(option => (
          !option.hidden &&
          <AccommodationOption
            key={option.title}
            index= {option.index}
            title={option.title}
            description={option.description}
            hidden={option.hidden}
            open={option.open}
            descriptionOpen={option.descriptionOpen}
            growOption={this.growOption}
            shrinkOption={this.shrinkOption}
            showDescription={this.showDescription}
            hideDescription={this.hideDescription}
          />
        ))}
      </div>
    );
  }

  componentDidMount(){
    let options = [];

    accommodationData.forEach((option, i) => {
      options.push({
        index: i,
        title: option.title,
        description: option.description,
        hidden: false,
        open: false,
        descriptionOpen: false
      });
    });

    this.setState(() => ({options: options}));
  }

  growOption(optionIndex){
    this.setState(prevState => {
      let newState = prevState;
      newState.options.forEach((option, i) => {
        if(i === optionIndex){
          newState.options[i].hidden = false;
          newState.options[i].open = true;
        } else {
          newState.options[i].hidden = true;
          newState.options[i].open = false;
        }
      });
      return newState;
    });
  }

  shrinkOption(optionIndex){
    this.setState(prevState => {
      let newState = prevState;
      newState.options.forEach((option, i) => {
        option.hidden = false;
        option.open = false;
      });
      return newState;
    });
  }

  showDescription(optionIndex){
    this.setState(prevState => {
      let newState = prevState;
      newState.options[optionIndex].descriptionOpen = true;
      return newState;
    });
  }

  hideDescription(optionIndex){
    this.setState(prevState => {
      let newState = prevState;
      newState.options[optionIndex].descriptionOpen = false;
      return newState;
    });
  }
}