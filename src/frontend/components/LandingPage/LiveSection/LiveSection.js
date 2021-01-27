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
      selectedPhoto: 0,
      enquiryActive: false,
      enquiringActive: false,
      enquirySuccess: 0
    }

    this.activateOption = this.activateOption.bind(this);
    this.selectOption = this.selectOption.bind(this);
    this.closeDetails = this.closeDetails.bind(this);
    this.showPhotos = this.showPhotos.bind(this);
    this.showEnquiry = this.showEnquiry.bind(this);
    this.makeEnquiry = this.makeEnquiry.bind(this);
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
            makeEnquiry={this.makeEnquiry}
            enquiringActive={this.state.enquiringActive}
            enquirySuccess={this.state.enquirySuccess}
          />
        }
      </div>
    );
  }

  componentDidMount(){
    fetch('/api/accommodation')
      .then(res => res.json())
      .then(result => {
        if(result !== 'Not Found'){
          this.setState(() => ({accommodationOptions: result}))
        }
      })
      .catch(error => console.log(error))
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
      selectedOption: -1,
      enquiringActive: false,
      enquirySuccess: 0
    }));
  }

  showPhotos(){
    this.setState(()=>({
      photosActive: true,
      enquiryActive: false,
      enquiringActive: false,
      enquirySuccess: 0
    }));
  }

  showEnquiry(){
    this.setState(()=>({
      photosActive: false,
      enquiryActive: true,
      enquiringActive: false,
      enquirySuccess: 0
    }));
  }

  showNextPhoto(){
    this.setState(prevState => {
      let imageIndex = prevState.selectedPhoto + 1;
      const totalImages = prevState.accommodationOptions[prevState.selectedOption].images.length;
      if(imageIndex > totalImages - 1)
        imageIndex -= totalImages
        
      return {selectedPhoto: imageIndex};
    });
  }

  showPreviousPhoto(){
    this.setState(prevState => {
      let imageIndex = prevState.selectedPhoto - 1;
      const totalImages = prevState.accommodationOptions[prevState.selectedOption].images.length;

      if(imageIndex < 0)
        imageIndex += totalImages;
      
      return {selectedPhoto: imageIndex}
    });
  }

  makeEnquiry(event){
    event.preventDefault();

    this.setState(prevState => ({enquiryActive: false, enquiringActive: true}));

    let formData = {
      'accommodationType': event.target.accommodationType.value,
      'name': event.target.ae_name.value,
      'email': event.target.ae_email.value,
      'pax': event.target.ae_pax.value,
      'arrival': event.target.ae_arrival.value,
      'departure': event.target.ae_departure.value,
      'flexible': event.target.ae_flexible.checked,
      'message': event.target.ae_message.value
    }

    fetch('/api/accommodationEnquiry', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({'enquiry': formData})
    })
    .then(response => response.json())
    .then(result => {
      if(result === 'Success'){
        this.setState(prevState => ({enquiringActive: false, enquirySuccess: 1}));
      } else {
        this.setState(prevState => ({enquiringActive: false, enquirySuccess: -1}));
      }
    })
    .catch(error => console.log(error))
  }
}