import React from 'react';

import './ExploreActivity.sass';

import ActivityTitle from './ActivityTitle/ActivityTitle';
import ActivityDescription from './ActivityDescription/ActivityDescription';

export default class ExploreActivity extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      open: true
    }

    this.toggleActivity = this.toggleActivity.bind(this);
  }

  render(){
    return (
      <div className={'ExploreActivity-' + (this.props.open ? 'open' : 'closed')}>
        <ActivityTitle
          title={this.props.title}
          toggleActivity={this.toggleActivity}
        />

        <ActivityDescription
          open={this.state.open}
          description={this.props.description}
        />
      </div>
    )
  }

  toggleActivity(){
    this.setState(state => {
      return{open: !state.open}
    });
  }
}