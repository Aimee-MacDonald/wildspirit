import React from 'react';

import './APNav.sass';

const APNav = props => (
  <nav id='APNav'>
    <ul>
      <li><button onClick={() => props.setSection('live')}>Live</button></li>
      <li><button onClick={() => props.setSection('learn')}>Learn</button></li>
      <li><button onClick={() => props.setSection('explore')}>Explore</button></li>
      <li><a href='/api/logout'>Logout</a></li>
    </ul>
  </nav>
);

export default APNav;