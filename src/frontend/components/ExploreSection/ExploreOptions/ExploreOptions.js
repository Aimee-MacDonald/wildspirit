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
      open={true}
    />

    <ExploreCategory
      title='Beaches'
      activities={[
        'Nature\'s Valley Beach',
        'Keurbooms Beach',
        'Plettenberg bay, Central beach',
        'Plettenberg bay, Roberg beach'
      ]}
      open={false}
    />

    <ExploreCategory
      title='Water Activities'
      activities={[
        'Sea kayaking Roberg MPA',
        'Keurbooms river canooing',
        'Groot river lagoon canooing'
      ]}
      open={false}
    />

    <ExploreCategory
      title='Animal Activities'
      activities={[
        'Monkey Land',
        'Birds of eden',
        'Tenikwa wildlife rehabilitation',
        'Elephant sanctuary'
      ]}
      open={false}
    />

    <ExploreCategory
      title='Adrenaline Activities'
      activities={[
        'Skydive Plett',
        'Bloukrans bridge bungy jump'
      ]}
      open={false}
    />
  </div>
);

export default ExploreOptions;