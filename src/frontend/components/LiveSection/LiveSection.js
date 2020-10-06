import React from 'react';

import './LiveSection.sass';

import LiveSectionHeading from './LiveSectionHeading/LiveSectionHeading';
import AccommodationOptions from './AccommodationOptions/AccommodationOptions';
import AccommodationDetails from './AccommodationDetails/AccommodationDetails';

const ACCOMMODATIONDATA = [
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

export default class LiveSection extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      accommodationOptions: [],
      activatedOption: -1,
      selectedOption: -1,
      photosActive: false,
      enquiryActive: false
    }

    this.activateOption = this.activateOption.bind(this);
    this.selectOption = this.selectOption.bind(this);
    this.closeDetails = this.closeDetails.bind(this);
    this.showPhotos = this.showPhotos.bind(this);
    this.showEnquiry = this.showEnquiry.bind(this);
  }

  render(){
    return(
      <div id='LiveSection'>
        <LiveSectionHeading />

        {this.state.selectedOption === -1 &&
          <AccommodationOptions
            accommodationOptions={this.state.accommodationOptions}
            activatedOption={this.state.activatedOption}
            activateOption={this.activateOption}
            selectOption={this.selectOption}
          />
        }

        {this.state.selectedOption !== -1 &&
          <AccommodationDetails
            closeDetails={this.closeDetails}
            accommodationDetails={this.state.accommodationOptions[this.state.selectedOption]}
            photosActive={this.state.photosActive}
            enquiryActive={this.state.enquiryActive}
            showPhotos={this.showPhotos}
            showEnquiry={this.showEnquiry}
          />
        }
      </div>
    );
  }

  componentDidMount(){
    this.setState(() => ({accommodationOptions: ACCOMMODATIONDATA}));
  }

  activateOption(optionIndex){
    this.setState(()=>({activatedOption: optionIndex}));
  }

  selectOption(optionIndex){
    this.setState(()=>({selectedOption: optionIndex}));
    this.showPhotos();
  }

  closeDetails(){
    this.setState(()=>({
      activatedOption: -1,
      selectedOption: -1
    }));
  }

  showPhotos(){
    this.setState(()=>({
      photosActive: true,
      enquiryActive: false
    }));
  }

  showEnquiry(){
    this.setState(()=>({
      photosActive: false,
      enquiryActive: true
    }));
  }
}