import React from 'react';

import './LearnOptions.sass';

import LearnOption from './LearnOption/LearnOption';

export default class LearnOptions extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      events: []
    };

    this.sendEnquiry = this.sendEnquiry.bind(this);
  }

  render(){
    return(
      <div id='LearnOptions'>
        {this.state.events.map((ev, i) => (
          <LearnOption
            key={`event_${i}`}
            eventDetails={ev}
            showEnquiryForm={() => this.showEnquiryForm(i)}
            sendEnquiry={(e) => this.sendEnquiry(e, i)}
            reset={(e) => this.reset(i)}
          />
        ))}
      </div>
    );
  }

  componentDidMount(){
    fetch('/api/events')
      .then(res => res.json())
      .then(result => this.setState(() => {
        if(result !== 'Not Found') {
          let events = result;

          events.forEach(ev => {
            ev.enquiryDetails = true;
            ev.enquiryForm = false;
            ev.enquiryLoading = false;
            ev.enquirySuccess = false;
            ev.enquiryFail = false;
          });
  
          return {events}
        }
      }))
      .catch(error => console.log(error))
  }

  showEnquiryForm(index){
    this.setState(prevState => {
      let events = prevState.events;
      
      events[index].enquiryDetails = false;
      events[index].enquiryForm = true;
      events[index].enquiryLoading = false;
      events[index].enquirySuccess = false;
      events[index].enquiryFail = false;

      return {events};
    });
  }

  sendEnquiry(e, index){
    e.preventDefault();

    this.setState(prevState => {
      let events = prevState.events;
      
      events[index].enquiryDetails = false;
      events[index].enquiryForm = false;
      events[index].enquiryLoading = true;
      events[index].enquirySuccess = false;
      events[index].enquiryFail = false;

      return {events};
    });

    const formData = {
      event: e.target.LOEEvent.value,
      name: e.target.LOEName.value,
      email: e.target.LOEEmail.value,
      message: e.target.LOEMessage.value
    }
    
    fetch('/api/learnEnquiry', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({'enquiry': formData})
    }).then(res => res.json())
      .then(result => {
        if(result === 'Success'){
          this.setState(prevState => {
            let events = prevState.events;
            
            events[index].enquiryDetails = false;
            events[index].enquiryForm = false;
            events[index].enquiryLoading = false;
            events[index].enquirySuccess = true;
            events[index].enquiryFail = false;
      
            return {events};
          });
        } else {
          this.setState(prevState => {
            let events = prevState.events;
            
            events[index].enquiryDetails = false;
            events[index].enquiryForm = false;
            events[index].enquiryLoading = false;
            events[index].enquirySuccess = false;
            events[index].enquiryFail = true;
      
            return {events};
          });
        }
      })
      .catch(error => {
        this.setState(prevState => {
          let events = prevState.events;
          
          events[index].enquiryDetails = false;
          events[index].enquiryForm = false;
          events[index].enquiryLoading = false;
          events[index].enquirySuccess = false;
          events[index].enquiryFail = true;
    
          return {events};
        });
      })
  }

  reset(index){
    this.setState(prevState => {
      let events = prevState.events;
      
      events[index].enquiryDetails = true;
      events[index].enquiryForm = false;
      events[index].enquiryLoading = false;
      events[index].enquirySuccess = false;
      events[index].enquiryFail = false;

      return {events};
    });
  }
}