import React from 'react'

import './Navigation.sass'
import './logo.svg'

const Navigation = () => (
  <nav id='Navigation'>
    <img src={'./images/logo.svg'} id='logo'/>

    <ul>
      <li><a href='#LiveSection'>Live</a></li>
      <li><a href='#LearnSection'>Learn</a></li>
      <li><a href='#ExploreSection'>Explore</a></li>
    </ul>
  </nav>
)

export default Navigation