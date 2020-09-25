import React from 'react';

import './ExploreCategory.sass';

import CategoryTitle from './CategoryTitle/CategoryTitle';
import ExploreActivity from './ExploreActivity/ExploreActivity';

const ExploreCategory = props => (
  <div className={'ExploreCategory-' + (props.open ? 'open' : 'closed')}>
    <CategoryTitle title={props.title} />
    <div className='categoryActivities'>
      {props.activities && props.activities.map(activity => (
        <ExploreActivity
          key={activity.name}
          title={activity.name}
          description={activity.description}
          open={true}
        />
      ))}
    </div>
  </div>
);

export default ExploreCategory;