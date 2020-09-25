import React from 'react';

const ActivityTitle = props => (
  <p onClick={props.toggleActivity}>{props.title}</p>
);

export default ActivityTitle;