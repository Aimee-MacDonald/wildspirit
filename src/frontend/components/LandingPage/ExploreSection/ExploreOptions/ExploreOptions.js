import React from 'react';

import './ExploreOptions.sass';

const ExploreOptions = props => (
  <div id='ExploreOptions'>
    {props.categories.map((category, index) => (
      <div key={`category_${index}`} className='exploreCategory' onClick={() => props.toggleDetails(index)}>
        <div className='categoryImage' style={{backgroundImage: `url(${category.options[0].imageURL})`}}></div>
        <h2 className='categoryName'>{category.name}</h2>
      </div>
    ))}
  </div>
);

export default ExploreOptions;