import React from 'react';

import './AdminPage.sass';

import APNav from '../../components/AdminPage/APNav/APNav';
import APLiveSection from '../../components/AdminPage/APLiveSection/APLiveSection';
import APLearnSection from '../../components/AdminPage/APLearnSection/APLearnSection';
import APExploreSection from '../../components/AdminPage/APExploreSection/APExploreSection';
import APGallerySection from '../../components/AdminPage/APGallerySection/APGallerySection';

export default class AdminPage extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      activeSection: {
        live: false,
        learn: false,
        explore: false,
        gallery: true
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
        {this.state.activeSection.explore && <APExploreSection addActivity={this.addActivity} />}
        {this.state.activeSection.gallery && <APGallerySection />}
      </div>
    );
  }

  setSection(section){
    let newSection = {
      live: false,
      learn: false,
      explore: false,
      gallery: false
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

  addActivity(event){
    const actPac = {
      category: event.target.APESCategory.value,
      name: event.target.APESName.value,
      description: event.target.APESDescription.value,
      image: event.target.APESImage.value
    };
    
    fetch('api/activity', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({'activity': actPac})
    })
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log(error))
  }
}