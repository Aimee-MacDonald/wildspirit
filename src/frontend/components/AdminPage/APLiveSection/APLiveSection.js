import React from 'react';

import './APLiveSection.sass';

import APLSNav from './APLSNav/APLSNav';
import APLSNew from './APLSNew/APLSNew';
import APLSEdit from './APLSEdit/APLSEdit';

export default class APLiveSection extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      accommodationOptions: [],
      selectedOption: -1,
      temp1: '',
      temp2: ''
    }

    this.addOption = this.addOption.bind(this);
    this.selectOption = this.selectOption.bind(this);
    this.updateTemp = this.updateTemp.bind(this);
  }

  render(){
    return(
      <div>
        <APLSNav accommodationOptions={this.state.accommodationOptions} selectOption={this.selectOption} />
        <APLSNew addOption={this.addOption} />
        {this.state.selectedOption !== -1 &&
          <APLSEdit
            title={this.state.temp1}
            description={this.state.temp2}
            updateTemp={this.updateTemp}
          />
        }
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

  selectOption(selection){
    const index = this.state.accommodationOptions.findIndex(v => v.title === selection);
    const t1 = this.state.accommodationOptions[index].title;
    const t2 = this.state.accommodationOptions[index].description;

    this.setState(() => ({
      selectedOption: index,
      temp1: t1,
      temp2: t2
    }));
  }

  updateTemp(event){
    let tVal = event.target.value;
    
    switch(event.target.id){
      case 'APLSETitle':
        this.setState(() => ({temp1: tVal}));
        break;

      case 'APLSEDescription':
        this.setState(() => ({temp2: tVal}));
        break;
    }
  }
}