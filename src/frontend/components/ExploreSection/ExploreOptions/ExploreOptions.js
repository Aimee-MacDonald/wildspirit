import React from 'react';

import './ExploreOptions.sass';

import ExploreDetails from './ExploreDetails/ExploreDetails';

const exploreData = [{
  "name": "Hiking Trails",
  "activities": [{
    "name": "Harkerville Forest",
    "description": "activity description"
  }, {
    "name": "Salt River Hike",
    "description": "activity description"
  }, {
    "name": "Kalanderkloof Hike",
    "description": "activity description"
  }, {
    "name": "Otter Trail",
    "description": "activity description"
  }, {
    "name": "Robberg Nature Reserve",
    "description": "activity description"
  }]
}, {
  "name": "Beaches",
  "activities": [{
    "name": "Nature's Valley Beach",
    "description": "activity description"
  }, {
    "name": "Keurbooms Beach",
    "description": "activity description"
  }, {
    "name": "Central Beach",
    "description": "activity description"
  }, {
    "name": "Robberg Beach",
    "description": "activity description"
  }]
}, {
  "name": "Water Activities",
  "activities": [{
    "name": "Sea Kayaking Robberg",
    "description": "activity description"
  }, {
    "name": "Keurbooms River Canooing",
    "description": "activity description"
  }, {
    "name": "Groot River Lagoon Canooing",
    "description": "activity description"
  }]
}, {
  "name": "Animal Activities",
  "activities": [{
    "name": "Monkey Land",
    "description": "activity description"
  }, {
    "name": "Birds of Eden",
    "description": "activity description"
  }, {
    "name": "Tenikwa Wildlife Rehabilitation",
    "description": "activity description"
  }, {
    "name": "Elephant Sanctuary",
    "description": "activity description"
  }]
}, {
  "name": "Adrenaline Activities",
  "activities": [{
    "name": "Skydive Plett",
    "description": "activity description"
  }, {
    "name": "Bloukrans Bungy Jump",
    "description": "activity description"
  }]
}];

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
    this.setState(() => ({categories: exploreData}));
  }

  selectCategory(categoryIndex){
    this.setState(() => ({selectedCategory: categoryIndex, selectedActivity: -1}));
  }

  selectActivity(activityIndex){
    this.setState(() => ({selectedActivity: activityIndex}))
  }
}