import React from 'react';

const APLSNav = props => (
  <nav>
    <ul>
      {props.accommodationOptions.length > 0 &&
        props.accommodationOptions.map(accommodationOption => (
          <li key={'APLSNOption-' + accommodationOption.title}>
            <button>{accommodationOption.title}</button>
          </li>
        ))
      }
    </ul>
  </nav>
);

export default APLSNav;