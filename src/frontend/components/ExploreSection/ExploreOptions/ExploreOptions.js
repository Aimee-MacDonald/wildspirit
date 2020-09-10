import React from 'react';

import ExploreCategory from './ExploreCategory/ExploreCategory';

const ExploreOptions = () => (
  <div>
    <ExploreCategory
      title='Hiking Trails'
      activities={[
        'Harkerville forest',
        'Salt River',
        'Kalanderkloof',
        'Otter trail',
        'Roberg nature reserve'
      ]}
    />

    <ExploreCategory
      title='Beaches'
      activities={[
        'Nature\'s Valley Beach',
        'Keurbooms Beach',
        'Plettenberg bay, Central beach',
        'Plettenberg bay, Roberg beach'
      ]}
    />

    <ExploreCategory
      title='Water Activities'
      activities={[
        'Sea kayaking Roberg MPA',
        'Keurbooms river canooing',
        'Groot river lagoon canooing'
      ]}
    />

    <ExploreCategory
      title='Animal Activities'
      activities={[
        'Monkey Land',
        'Birds of eden',
        'Tenikwa wildlife rehabilitation',
        'Elephant sanctuary'
      ]}
    />

    <ExploreCategory
      title='Adrenaline Activities'
      activities={[
        'Skydive Plett',
        'Bloukrans bridge bungy jump'
      ]}
    />
  </div>
);

export default ExploreOptions;