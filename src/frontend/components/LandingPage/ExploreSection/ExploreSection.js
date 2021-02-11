import React from 'react';

import './ExploreSection.sass';

import ExploreHeader from './ExploreHeader/ExploreHeader';
import ExploreOptions from './ExploreOptions/ExploreOptions';
import ExploreDetails from './ExploreDetails/ExploreDetails';

export default class ExploreSection extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      categories: [
        {
          categoryName: 'Category 1',
          options: [
            {
              optionName: 'Option 1',
              optionDescription: 'Description 1',
              optionPhoto: '#'
            }
          ]
        }, {
          categoryName: 'Category 2',
          options: [
            {
              optionName: 'Option 1',
              optionDescription: 'Description 1',
              optionPhoto: '#'
            }
          ]
        }, {
          categoryName: 'Category 3',
          options: [
            {
              optionName: 'Option 1',
              optionDescription: 'Description 1',
              optionPhoto: '#'
            }
          ]
        }, {
          categoryName: 'Category 4',
          options: [
            {
              optionName: 'Option 1',
              optionDescription: 'Description 1',
              optionPhoto: '#'
            }
          ]
        }
      ],
      detailsActive: false,
      selectedCategory: 0
    }

    this.toggleDetails = this.toggleDetails.bind(this);
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
            toggleDetails={this.toggleDetails}
          />
        }
      </div>
    );
  }

  toggleDetails(){
    this.setState(prevState => ({detailsActive: !prevState.detailsActive}))
  }
}