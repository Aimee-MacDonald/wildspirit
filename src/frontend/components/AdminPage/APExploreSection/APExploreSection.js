import React from 'react';

import './APExploreSection.sass';

const APExploreSection = props => (
  <form id='APExploreSection' onSubmit={props.addActivity}>
    <label htmlFor='APESCategory'>Category</label>
    <input id='APESCategory' />

    <label htmlFor='APESName'>Name</label>
    <input id='APESName' />
    
    <label htmlFor='APESDescription'>Description</label>
    <textarea id='APESDescription' />
    
    <label htmlFor='APESImage'>Image</label>
    <input id='APESImage' />
    
    <button type='submit'>Add</button>
  </form>
);

export default APExploreSection;