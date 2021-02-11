import React from 'react';

import './ExploreDetails.sass';

const ExploreDetails = props => (
  <div id='ExploreDetails'>
    <div>
      <button onClick={props.toggleDetails}>Close</button>
      <p>Description</p>
    </div>

    <div className='imageSlider'>
      <div className='images'>
        <p>Image 1</p>
        <p>Image 2</p>
        <p>Image 3</p>
        <p>Image 4</p>
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