import React from 'react';

import './ExploreSection.sass';

import ExploreHeader from './ExploreHeader/ExploreHeader';
import ExploreOptions from './ExploreOptions/ExploreOptions';

const ExploreSection = () => (
  <div id='ExploreSection'>
    <ExploreHeader />
    <ExploreOptions />
  </div>
);

export default ExploreSection;