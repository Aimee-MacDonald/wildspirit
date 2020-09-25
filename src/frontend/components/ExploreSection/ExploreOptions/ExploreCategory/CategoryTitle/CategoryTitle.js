import React from 'react';

import './CategoryTitle.sass';

const CategoryTitle = props => (
  <p className='CategoryTitle' onClick={props.toggleCategory}>{props.title}</p>
);

export default CategoryTitle;