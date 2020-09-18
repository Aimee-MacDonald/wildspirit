import React from 'react';

import './ActivityDescription.sass';

const ActivityDescription = props => (
  <div className={'ActivityDescription-' + (props.open ? 'open' : 'closed')}>
    <p>Activity Description</p>
  </div>
);

export default ActivityDescription;