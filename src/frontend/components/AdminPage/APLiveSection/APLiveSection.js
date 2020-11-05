import React from 'react';

import './APLiveSection.sass';

import APLSNav from './APLSNav/APLSNav';
import APLSNew from './APLSNew/APLSNew';
import APLSEdit from './APLSEdit/APLSEdit';

export default class APLiveSection extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      accommodationOptions: [],
      selectedOption: -1,
      temp1: '',
      temp2: ''
    }

    this.addOption = this.addOption.bind(this);
    this.selectOption = this.selectOption.bind(this);
    this.updateTemp = this.updateTemp.bind(this);
    this.saveOption = this.saveOption.bind(this);
    this.addImage = this.addImage.bind(this);
  }

  render(){
    return(
      <div>
        <APLSNav accommodationOptions={this.state.accommodationOptions} selectOption={this.selectOption} />
        <APLSNew addOption={this.addOption} />
        {this.state.selectedOption !== -1 &&
          <APLSEdit
            title={this.state.temp1}
            description={this.state.temp2}
            updateTemp={this.updateTemp}
            saveOption={this.saveOption}
            addImage={this.addImage}
          />
        }
      </div>
    );
  }

  componentDidMount(){
    fetch('/api/accommodation')
      .then(res => res.json())
      .then(result => {this.setState(() => ({accommodationOptions: result}))})
      .catch(error => console.log(error))
  }

  addOption(event){
    event.preventDefault();

    const newOption = {
      title: event.target.APLSNType.value,
      discription: '',
      images: []
    }

    this.setState(oldState => {
      let newOptions = oldState.accommodationOptions;
      newOptions.push(newOption);
      return{accommodationOptions: newOptions}
    });
  }

  selectOption(selection){
    const index = this.state.accommodationOptions.findIndex(v => v.title === selection);
    const t1 = this.state.accommodationOptions[index].title;
    const t2 = this.state.accommodationOptions[index].description;

    this.setState(() => ({
      selectedOption: index,
      temp1: t1,
      temp2: t2
    }));
  }

  updateTemp(event){
    let tVal = event.target.value;

    switch(event.target.id){
      case 'APLSETitle':
        this.setState(() => ({temp1: tVal}));
        break;

      case 'APLSEDescription':
        this.setState(() => ({temp2: tVal}));
        break;
    }
  }

  saveOption(event){
    event.preventDefault();

    this.setState(prevState => {
      const newOptions = prevState.accommodationOptions;
      newOptions[this.state.selectedOption].title = this.state.temp1;
      newOptions[this.state.selectedOption].description = this.state.temp2;
      return {accommodationOptions: newOptions};
    });

    const optionID = this.state.accommodationOptions[this.state.selectedOption]._id;
    
    if(optionID){
      const accommodationData = {
        id: optionID,
        title: this.state.temp1,
        description: this.state.temp2
      };

      fetch('/api/editAccommodation', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({'accommodation': accommodationData})
      }).then(res => res.json())
        .then(result => console.log(result))
        .catch(error => console.log(error))
    } else {
      const accommodationData = {
        title: this.state.temp1,
        description: this.state.temp2,
        images: []
      };

      fetch('/api/newAccommodation', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({'accommodation': accommodationData})
      }).then(res => res.json())
        .then(result => console.log(result))
        .catch(error => console.log(error))
    }
  }

  addImage(event){
    event.preventDefault();
    const imgPac = {
      srcLink: event.target.APLSEImgURL.value,
      altText: event.target.APLSEAltText.value
    };

    this.setState(prevState => {
      var newData = prevState.accommodationOptions;
      newData[this.state.selectedOption].images.push(imgPac);
      return {accommodationOptions: newData};
    });

    fetch('/api/addAccommodationImage', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({'accommodationID': this.state.accommodationOptions[this.state.selectedOption]._id, 'imageData': imgPac})
    }).then(res => res.json())
      .then(result => console.log(result))
      .catch(error => console.log(error))
  }
}