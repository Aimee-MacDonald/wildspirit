import React from 'react';

import './ExploreDetails.sass';

const ExploreDetails = props => (
  <div id='ExploreDetails' style={{order: props.selectedCategory}}>
    {(props.categories.length > 0) &&
      props.categories[props.selectedCategory].activities.map((activity, index) => (
        <div key={'activity'+index}>
          <p onClick={() => props.selectActivity(index)}>{activity.name}</p>
          {(props.selectedActivity === index) &&
            <p>{activity.description}</p>
          }
        </div>
      ))
    }
  </div>
);

export default ExploreDetails;