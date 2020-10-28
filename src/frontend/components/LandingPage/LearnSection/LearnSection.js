import React from 'react';

import './LearnSection.sass';

import LearnHeader from './LearnHeader/LearnHeader';
import LearnOptions from './LearnOptions/LearnOptions';

const LearnSection = () => (
  <div id='LearnSection'>
    <LearnHeader />
    <LearnOptions />
  </div>
);

export default LearnSection;