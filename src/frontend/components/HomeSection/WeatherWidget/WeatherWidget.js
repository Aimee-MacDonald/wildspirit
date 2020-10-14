import React from 'react';

import './WeatherWidget.sass';

export default class WeatherWidget extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      description: "",
      temperature: 0
    }
  }

  render(){
    return(
      <div id="WeatherWidget">
        {!!this.state.temperature && <p>{this.state.temperature}<span>&#176;</span>C</p>}
        <p>{this.state.description}</p>
      </div>
    );
  }

  componentDidMount(){
    window.fetch('/api/weather')
      .then(res => res.json())
      .then(result => {
        this.setState(() => (result))
      })
  }
}