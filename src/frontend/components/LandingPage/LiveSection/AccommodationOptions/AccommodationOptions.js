import React from 'react';

import './AccommodationOptions.sass';

const AccommodationOptions = props => (
  <div id='AccommodationOptions'>
    {props.accommodationOptions.length > 0 && props.accommodationOptions.map((option, index) => (
      <div
        className={'accommodationOption'}
        key={'accommodationOption'+index}
        onMouseEnter={() => {props.activateOption(index)}}
        onMouseLeave={() => {props.activateOption(-1)}}
        style={{'backgroundImage': `url('${props.accommodationOptions[index].images[0].srcLink}')`}}>

        {props.activatedOption !== index &&
          <p className='title'>{option.title}</p>
        }

        {props.activatedOption === index &&
          <div className='activatedOption'>
            <p className={'accommodationDescription'}>{option.description}</p>
            <button onClick={()=>{props.selectOption(index)}}>View</button>
          </div>
        }
      </div>
    ))}
  </div>
);

export default AccommodationOptions;