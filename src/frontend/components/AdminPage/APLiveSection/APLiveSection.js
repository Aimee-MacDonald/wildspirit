import React from 'react';

import './APLiveSection.sass';

import APLSNav from './APLSNav/APLSNav';
import APLSNew from './APLSNew/APLSNew';
import APLSEdit from './APLSEdit/APLSEdit';

export default class APLiveSection extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      accommodationOptions: []
    }
  }

  render(){
    return(
      <div>
        <APLSNav accommodationOptions={this.state.accommodationOptions} />
        <APLSNew />
        <APLSEdit />
      </div>
    );
  }

  componentDidMount(){
    fetch('/api/accommodation')
      .then(res => res.json())
      .then(result => {this.setState(() => ({accommodationOptions: result}))})
      .catch(error => console.log(error))
  }
}