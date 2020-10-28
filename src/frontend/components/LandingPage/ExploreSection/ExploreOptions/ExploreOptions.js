import React from 'react';

import './ExploreOptions.sass';

import ExploreDetails from './ExploreDetails/ExploreDetails';

export default class ExploreOptions extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      categories: [],
      selectedCategory: -1,
      selectedActivity: -1
    }

    this.selectActivity = this.selectActivity.bind(this);
  }

  render(){
    return (
      <div id='ExploreOptions'>
        {this.state.categories.map((category, index) => (
          <p
            className={'exploreCategory'}
            style={{order: index}}
            key={'category'+index}
            onClick={() => this.selectCategory(index)}
          >{category.name}</p>
        ))}

        {this.state.selectedCategory !== -1 && <ExploreDetails
          categories={this.state.categories}
          selectedCategory={this.state.selectedCategory}
          selectedActivity={this.state.selectedActivity}
          selectActivity={this.selectActivity}
        />}
      </div>
    );
  }

  componentDidMount(){
    fetch('/api/activities')
      .then(res => res.json())
      .then(result => {
        this.setState(() => ({categories: result}));
      })
  }

  selectCategory(categoryIndex){
    this.setState(() => ({selectedCategory: categoryIndex, selectedActivity: -1}));
  }

  selectActivity(activityIndex){
    this.setState(() => ({selectedActivity: activityIndex}))
  }
}