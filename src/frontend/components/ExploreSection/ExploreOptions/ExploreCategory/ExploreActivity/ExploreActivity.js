import React from 'react';

import './ExploreActivity.sass';

import ActivityTitle from './ActivityTitle/ActivityTitle';
import ActivityDescription from './ActivityDescription/ActivityDescription';

const ExploreActivity = props => (
  <div className={'ExploreActivity-' + (props.open ? 'open' : 'closed')}>
    <ActivityTitle title={props.title} />
    <ActivityDescription
      open={props.open}
      description={props.description}
    />
  </div>
);

export default ExploreActivity;