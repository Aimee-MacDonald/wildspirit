import React from 'react';

import './ExploreDetails.sass';

const ExploreDetails = props => (
  <div id='ExploreDetails' style={{order: props.selectedCategory}}>
    {(props.categories.length > 0) &&
      props.categories[props.selectedCategory].activities.map((activity, index) => (
        <p
          className={'activityName'}
          key={'activity'+index}
          style={{order: index}}
          onClick={() => props.selectActivity(index)}
        >
          {activity.name}
        </p>
      ))
    }

    {(props.selectedActivity !== -1) &&
      <div style={{order: props.selectedActivity}} className='activityDetails'>
        <img src={props.categories[props.selectedCategory].activities[props.selectedActivity].image}></img>
        <p>
          {props.categories[props.selectedCategory].activities[props.selectedActivity].description}
        </p>
      </div>
    }
  </div>
);

export default ExploreDetails;