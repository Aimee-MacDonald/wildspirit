import React from 'react';

const LearnOptionInfo = props => (
  <div>
    <p>{props.title}</p>
    <p>{props.subtitle}</p>
    <p>{props.description}</p>
    <p>Share Links</p>
    <button>Book</button>
  </div>
);

export default LearnOptionInfo;