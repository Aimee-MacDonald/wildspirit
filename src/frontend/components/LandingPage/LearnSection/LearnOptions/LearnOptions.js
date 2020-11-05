import React from 'react';

import './LearnOptions.sass';

import LearnOption from './LearnOption/LearnOption';

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
            makeEnquiry={this.makeEnquiry}
          />
        ))}
      </div>
    );
  }

  componentDidMount(){
    fetch('/api/events')
      .then(res => res.json())
      .then(result => {
        if(result !== 'Not Found'){
          let options = [];
        
          result.forEach(option => {
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
      });
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

  makeEnquiry(event){
    event.preventDefault();

    const formData = {
      'event': event.target.LOEEvent.value,
      'name': event.target.LOEName.value,
      'email': event.target.LOEEmail.value,
      'message': event.target.LOEMessage.value
    };

    fetch('/api/learnEnquiry', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({'enquiry': formData})
    })
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log(error))
  }
}