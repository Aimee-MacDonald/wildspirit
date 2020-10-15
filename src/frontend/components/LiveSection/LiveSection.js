import React from 'react';

import './LiveSection.sass';

import LiveSectionHeading from './LiveSectionHeading/LiveSectionHeading';
import AccommodationOptions from './AccommodationOptions/AccommodationOptions';
import AccommodationDetails from './AccommodationDetails/AccommodationDetails';

export default class LiveSection extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      accommodationOptions: [],
      activatedOption: -1,
      selectedOption: -1,
      photosActive: false,
      enquiryActive: false,
      selectedPhoto: 1
    }

    this.activateOption = this.activateOption.bind(this);
    this.selectOption = this.selectOption.bind(this);
    this.closeDetails = this.closeDetails.bind(this);
    this.showPhotos = this.showPhotos.bind(this);
    this.showEnquiry = this.showEnquiry.bind(this);
    this.showNextPhoto = this.showNextPhoto.bind(this);
    this.showPreviousPhoto = this.showPreviousPhoto.bind(this);
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
            selectedPhoto={this.state.selectedPhoto}
            showNextPhoto={this.showNextPhoto}
            showPreviousPhoto={this.showPreviousPhoto}
          />
        }
      </div>
    );
  }

  componentDidMount(){
    fetch('/api/accommodation')
      .then(res => res.json())
      .then(result => {
        this.setState(() => ({accommodationOptions: result}));
      });
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

  showNextPhoto(){
    this.setState(prevState => {
      let imageIndex = prevState.selectedPhoto + 1;
      const indexMax = prevState.accommodationOptions[prevState.selectedOption].images.length;
      if(imageIndex > indexMax - 1)
        imageIndex -= indexMax
        
      return {selectedPhoto: imageIndex};
    });
  }

  showPreviousPhoto(){
    this.setState(prevState => {
      let imageIndex = prevState.selectedPhoto - 1;
      if(imageIndex < 0)
        imageIndex += prevState.accommodationOptions[prevState.selectedOption].images.length
      
      return {selectedPhoto: imageIndex}
    });
  }
}