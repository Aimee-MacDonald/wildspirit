import React from 'react';

const APNav = props => (
  <nav>
    <ul>
      <li><button onClick={() => props.setSection('live')}>Live</button></li>
      <li><button onClick={() => props.setSection('learn')}>Learn</button></li>
      <li><button onClick={() => props.setSection('explore')}>Explore</button></li>
    </ul>
  </nav>
);

export default APNav;