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

    this.addOption = this.addOption.bind(this);
  }

  render(){
    return(
      <div>
        <APLSNav accommodationOptions={this.state.accommodationOptions} />
        <APLSNew addOption={this.addOption} />
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
}