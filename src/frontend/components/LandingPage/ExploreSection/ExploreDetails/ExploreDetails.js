import React from 'react';

import './ExploreDetails.sass';

const ExploreDetails = props => (
  <div id='ExploreDetails'>
    <div className='optionDetails'>
      <button onClick={props.toggleDetails}>Close</button>
      <h2>{props.options.name}</h2>
      <h3>{props.options.options[props.selectedOption].name}</h3>
      <p>{props.options.options[props.selectedOption].description}</p>
      <ul>
        {props.options.options[props.selectedOption].links.map(link => (
          <li>
            <label>{link.title}</label>
            <a href={link.URL}>{link.URL}</a>
          </li>
        ))}
      </ul>
    </div>

    <div className='imageSlider'>
      <div className='images'>
        {props.options.options.map((option, index) => (
          <div
            className={`image${props.selectedOption === index ? ' open' : ''}`}
            style={{backgroundImage: `url(${option.imageURL})`}}
            key={`explore_option_${index}`}>
          </div>
        ))}
      </div>

      <div className='controls'>
        <div className='buttons'>
          <button onClick={props.previousOption}><span className='left'></span></button>
          <button onClick={props.nextOption}><span className='right'></span></button>
        </div>

        <div>Indexing</div>
      </div>
    </div>
  </div>
);

export default ExploreDetails;