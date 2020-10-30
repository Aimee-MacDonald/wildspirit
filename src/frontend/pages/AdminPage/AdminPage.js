import React from 'react';

import APLiveSection from '../../components/AdminPage/APLiveSection/APLiveSection';
import APLearnSection from '../../components/AdminPage/APLearnSection/APLearnSection';

export default class AdminPage extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <APLiveSection addAccommodation={this.addAccommodation} />
        <APLearnSection addEvent={this.addEvent} />
      </div>
    );
  }

  addAccommodation(event){
    const accPac = {
      title: event.target.APLSType.value,
      description: event.target.APLSDescription.value,
      images: [{
        srcLink: event.target.APLSImgURL.value,
        altText: event.target.APLSAltText.value
      }]
    }
    
    fetch('/api/accommodation', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({'accommodation': accPac})
    })
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log(error))
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