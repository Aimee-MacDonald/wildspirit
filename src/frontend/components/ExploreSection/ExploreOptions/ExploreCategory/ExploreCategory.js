import React from 'react';

import './ExploreCategory.sass';

import CategoryTitle from './CategoryTitle/CategoryTitle';
import ExploreActivity from './ExploreActivity/ExploreActivity';

export default class ExploreCategory extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      open: true
    };

    this.toggleCategory = this.toggleCategory.bind(this);
  }

  render(){
    return (
      <div className={'ExploreCategory-' + (this.props.open ? 'open' : 'closed')}>
        <CategoryTitle title={this.props.title} toggleCategory={this.toggleCategory} />
        <div className='categoryActivities'>
          {this.props.activities && this.props.activities.map(activity => (
            <ExploreActivity
              key={activity.name}
              title={activity.name}
              description={activity.description}
              open={this.state.open}
            />
          ))}
        </div>
      </div>
    )
  }

  toggleCategory(){
    this.setState(state => {
      return {open: !state.open}
    });
  }
}