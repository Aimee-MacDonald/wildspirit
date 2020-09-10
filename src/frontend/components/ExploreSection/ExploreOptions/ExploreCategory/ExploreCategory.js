import React from 'react';

import ExploreActivity from './ExploreActivity/ExploreActivity';

const ExploreCategory = props => (
  <div>
    <p>{props.title}</p>
    {props.activities && props.activities.map(activity => (
      <ExploreActivity key={activity} title={activity} />
    ))}
  </div>
);

export default ExploreCategory;