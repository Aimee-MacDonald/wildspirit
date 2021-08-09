import React, {useState, useEffect} from 'react'

import LiveSectionHeading from './LiveSectionHeading/LiveSectionHeading'
import AccommodationOptions from './AccommodationOptions/AccommodationOptions'
import AccommodationDetails from './AccommodationDetails/AccommodationDetails'

const LiveSection = () => {
  const [options, setOptions] = useState([])
  const [selectedOption, setSelectedOption] = useState(-1)

  useEffect(() => {
    fetch('/api/accommodation')
      .then(res => res.json())
      .then(result => {
        if(result !== 'Not Found'){
          setOptions(result)
        }
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <div>
      <LiveSectionHeading/>

      {selectedOption === -1 &&
        <AccommodationOptions
          options={options}
          selectOption={setSelectedOption}
        />
      }

      {selectedOption !== -1 &&
        <AccommodationDetails
          resetSelectedOption={() => setSelectedOption(-1)}
          optionDetails={options[selectedOption]}
        />
      }
    </div>
  )
}

export default LiveSection
































/*
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
      enquirySuccess: 0,
      costEstimation: 0
    }

    this.activateOption = this.activateOption.bind(this);
    this.selectOption = this.selectOption.bind(this);
    this.closeDetails = this.closeDetails.bind(this);
    this.showPhotos = this.showPhotos.bind(this);
    this.showEnquiry = this.showEnquiry.bind(this);
    this.makeEnquiry = this.makeEnquiry.bind(this);
    this.showNextPhoto = this.showNextPhoto.bind(this);
    this.showPreviousPhoto = this.showPreviousPhoto.bind(this);
    this.calculateCost = this.calculateCost.bind(this);
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
            photos={this.state.accommodationOptions[this.state.selectedOption].images}
            costEstimation={this.state.costEstimation}
            calculateCost={this.calculateCost}
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
      enquirySuccess: 0,
      selectedPhoto: 0
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

  

  calculateCost(e){
    let enquiryForm = e.target.parentNode.parentNode;
    if(enquiryForm.tagName === 'DIV'){
      enquiryForm = enquiryForm.parentNode;
    }

    let accommodationType = this.state.accommodationOptions[this.state.selectedOption].title;
    const numGuests = enquiryForm.childNodes[3].childNodes[1].value || 1;
      
    const arrivalDate = new Date(enquiryForm.childNodes[4].childNodes[0].childNodes[1].value);
    const departureDate = new Date(enquiryForm.childNodes[4].childNodes[1].childNodes[1].value);
    const days = (departureDate - arrivalDate) / (1000 * 3600 *24) || 1;

    let totalCost = 0;
    let numRooms = 0;
    
    switch(accommodationType){
      case 'Dorms':
        totalCost = numGuests * 220;
        break;

      case 'Double Rooms':
        numRooms = Math.round(numGuests / 2);
        totalCost = numRooms * 620;
        break;

      case 'Twin Rooms':
        numRooms = Math.round(numGuests / 2);
        totalCost = numRooms * 620;
        break;

      case 'Family Rooms':
        numRooms = Math.ceil(numGuests / 4);
        const baseRate = numRooms * 750;
        const additionalGuests = numGuests - (numRooms * 2) < 0 ? 0 : numGuests - (numRooms * 2);
        const additionalRate = additionalGuests * 200;
        totalCost = baseRate + additionalRate;
        break;

      case 'Safari Tents':
        numRooms = Math.round(numGuests / 2);
        totalCost = numRooms * 420;
        break;

      case 'Forest Camping':
        totalCost = numGuests * 140;
        break;
    }

    totalCost = totalCost * days;

    this.setState(prevState => ({costEstimation: totalCost}))
  }
}
*/