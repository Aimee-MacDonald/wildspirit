import React from 'react';

import APLiveSection from '../../components/AdminPage/APLiveSection/APLiveSection';

export default class AdminPage extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <APLiveSection addAccommodation={this.addAccommodation} />
    
        <h2>Parallax Section</h2>
        <h3>Parallax Image</h3>
        <h3>Parallax Text</h3>
    
        <h2>Learn Section</h2>
        <h3>Add Card</h3>
        <h3>Remove Card</h3>
    
        <h2>Explore Section</h2>
        <h3>Add Category</h3>
        <h3>Remove Category</h3>
        <h3>Add Activity</h3>
        <h3>Remove Activity</h3>
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
}