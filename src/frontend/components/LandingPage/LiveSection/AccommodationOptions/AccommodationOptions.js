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
        style={{'backgroundImage': `url('${!!props.accommodationOptions[index].images.length ? props.accommodationOptions[index].images[0].srcLink : ''}')`}}
        onClick={()=>{props.selectOption(index)}}>

        {props.activatedOption !== index &&
          <div className='title'>
            <p>{option.title}</p>
            <p>{`From R${option.entryPrice || 0}`}</p>
          </div>
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