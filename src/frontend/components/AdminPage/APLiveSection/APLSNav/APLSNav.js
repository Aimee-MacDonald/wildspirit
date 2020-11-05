import React from 'react';

import './APLSNav.sass';

const APLSNav = props => (
  <nav id='APLSNav'>
    <ul>
      {props.accommodationOptions.length > 0 &&
        props.accommodationOptions.map(accommodationOption => (
          <li key={'APLSNOption-' + accommodationOption.title}>
            <button onClick={() => props.selectOption(accommodationOption.title)}>{accommodationOption.title}</button>
          </li>
        ))
      }
    </ul>
  </nav>
);

export default APLSNav;