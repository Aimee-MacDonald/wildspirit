import React from 'react';

import './ExploreDetails.sass';

const ExploreDetails = props => (
  <div id='ExploreDetails'>
    <div>
      <button onClick={props.toggleDetails}>Close</button>
      <h2>{props.options.categoryName}</h2>
      <h3>{props.options.options[props.selectedOption].optionName}</h3>
      <p>{props.options.options[props.selectedOption].optionDescription}</p>
    </div>

    <div className='imageSlider'>
      <div className='images'>
        <p className='image open'>Image 1</p>
        <p className='image'>Image 2</p>
        <p className='image'>Image 3</p>
        <p className='image'>Image 4</p>
      </div>

      <div className='controls'>
        <div className='buttons'>
          <button>Left</button>
          <button>Right</button>
        </div>

        <div>Indexing</div>
      </div>
    </div>
  </div>
);

export default ExploreDetails;