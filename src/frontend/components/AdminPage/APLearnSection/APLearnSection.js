import React from 'react';

import EventCreator from './EventCreator/EventCreator';
import EventRemover from './EventRemover/EventRemover';

import './APLearnSection.sass';

export default class APLearnSection extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      events: []
    };
  }

  render(){
    return(
      <div id='APLearnSection'>
        <EventCreator addEvent={this.addEvent} />
        <EventRemover events={this.state.events} removeEvent={this.removeEvent} />
      </div>
    );
  }

  componentDidMount(){
    fetch('/api/events')
      .then(res => res.json())
      .then(events => {
        if(events !== 'Not Found'){
          this.setState(() => ({events}))
        }
      })
      .catch(error => console.log(error))
  }

  addEvent(e){
    e.preventDefault();

    fetch('/api/event', {
      method: 'post',
      body: new FormData(e.target)
    }).then(res => res.json())
      .then(result => console.log(result))
      .catch(error => console.log(error))
  }

  removeEvent(eventID){
    fetch('/api/removeEvent', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({eventID})
    }).then(res => res.json())
      .then(result => console.log(result))
      .catch(error => console.log(error))
  }
}