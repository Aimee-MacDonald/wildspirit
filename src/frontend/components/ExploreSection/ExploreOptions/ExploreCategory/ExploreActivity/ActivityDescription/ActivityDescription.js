import React from 'react';

import './ActivityDescription.sass';

const ActivityDescription = props => (
  <div className={'ActivityDescription-' + (props.open ? 'open' : 'closed')}>
    <p>{props.description}</p>
  </div>
);

export default ActivityDescription;