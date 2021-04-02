import React from 'react';

import './AdminPage.sass';

import APNav from '../../components/AdminPage/APNav/APNav';
import APLiveSection from '../../components/AdminPage/APLiveSection/APLiveSection';
import APLearnSection from '../../components/AdminPage/APLearnSection/APLearnSection';
import APExploreSection from '../../components/AdminPage/APExploreSection/APExploreSection';

export default class AdminPage extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      activeSection: {
        live: false,
        learn: false,
        explore: false
      }
    }

    this.setSection = this.setSection.bind(this);
  }

  render(){
    return(
      <div id='AdminPage'>
        <APNav setSection={this.setSection} />

        {this.state.activeSection.live && <APLiveSection />}
        {this.state.activeSection.learn && <APLearnSection addEvent={this.addEvent} />}
        {this.state.activeSection.explore && <APExploreSection />}
      </div>
    );
  }

  setSection(section){
    let newSection = {
      live: false,
      learn: false,
      explore: false
    };

    newSection[section] = true;

    this.setState(() => ({activeSection: newSection}))
  }

  addEvent(event){
    const evPac = {
      imgURL: event.target.APLSImgURL.value,
      imgAlt: event.target.APLSImgAlt.value,
      title: event.target.APLSTitle.value,
      subtitle: event.target.APLSSubtitle.value,
      description: event.target.APLSDescription.value
    };

    fetch('/api/event', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({'event': evPac})
    })
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log(error))
  }
}