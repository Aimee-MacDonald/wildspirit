import React from 'react';

import './ExploreDetails.sass';

const ExploreDetails = props => (
  <div id='ExploreDetails'>
    <div className='optionDetails'>
      <button onClick={props.toggleDetails} className='close'>Close</button>
      <h2>{props.options.name}</h2>
      <h3>{props.options.options[props.selectedOption].name}</h3>
      <p>{props.options.options[props.selectedOption].description}</p>
      <ul className='links'>
        {props.options.options[props.selectedOption].links.map(link => (
          <li>
            <label>{link.title}</label>
            <a href={link.URL} target='_blank'>{link.URL}</a>
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

        <ul className='indexing'>
          {props.options.options.map((option, index) => (
            <li className={index === props.selectedOption ? 'active' : 'inactive'}></li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default ExploreDetails;