import React from 'react';

import './ExploreSection.sass';

import ExploreHeader from './ExploreHeader/ExploreHeader';
import ExploreOptions from './ExploreOptions/ExploreOptions';
import ExploreDetails from './ExploreDetails/ExploreDetails';
import { json } from 'body-parser';

export default class ExploreSection extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      categories: [],
      detailsActive: false,
      selectedCategory: 0,
      selectedOption: 0
    }

    this.toggleDetails = this.toggleDetails.bind(this);
    this.previousOption = this.previousOption.bind(this);
    this.nextOption = this.nextOption.bind(this);
  }

  render(){
    return(
      <div id='ExploreSection'>
        <ExploreHeader />

        {!this.state.detailsActive &&
          <ExploreOptions
            categories={this.state.categories}
            toggleDetails={this.toggleDetails}
          />
        }

        {this.state.detailsActive &&
          <ExploreDetails
            options={this.state.categories[this.state.selectedCategory]}
            toggleDetails={this.toggleDetails}
            selectedOption={this.state.selectedOption}
            nextOption={this.nextOption}
            previousOption={this.previousOption}
          />
        }
      </div>
    );
  }

  componentDidMount(){
    console.log('Fetching Categories');
    
    fetch('/api/exploreCategories')
      .then(res => res.json())
      .then(result => {
        this.setState(() => ({categories: result}))
      })
      .catch(error => console.log(error))
  }

  toggleDetails(index){
    let selectedCategory = 0;

    if(typeof(index) === 'number'){
      selectedCategory = index;
    } else {
      selectedCategory = 0;
    }

    this.setState(prevState => ({detailsActive: !prevState.detailsActive, selectedCategory: selectedCategory, selectedOption: 0}))
  }

  nextOption(){
    this.setState(prevState => {
      const maxOption = this.state.categories[this.state.selectedCategory].options.length - 1
      let selectedOption = prevState.selectedOption;
      selectedOption += 1;

      if(selectedOption < 0){
        selectedOption = maxOption;
      } else if(selectedOption > maxOption){
        selectedOption = 0;
      }

      return {selectedOption};
    });
  }

  previousOption(){
    this.setState(prevState => {
      const maxOption = this.state.categories[this.state.selectedCategory].options.length - 1
      let selectedOption = prevState.selectedOption;
      selectedOption -= 1;

      if(selectedOption < 0){
        selectedOption = maxOption;
      } else if(selectedOption > maxOption){
        selectedOption = 0;
      }

      return {selectedOption};
    });
  }
}