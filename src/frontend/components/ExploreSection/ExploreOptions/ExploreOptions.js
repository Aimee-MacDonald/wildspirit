import React from 'react';

import ExploreCategory from './ExploreCategory/ExploreCategory';

const exploreData = [{
  "category": "Hiking Trails",
  "activities": [{
    "name": "Harkerville Forest",
    "description": "activity description"
  }, {
    "name": "Salt River Hike",
    "description": "activity description"
  }, {
    "name": "Kalanderkloof Hike",
    "description": "activity description"
  }, {
    "name": "Otter Trail",
    "description": "activity description"
  }, {
    "name": "Robberg Nature Reserve",
    "description": "activity description"
  }]
}, {
  "category": "Beaches",
  "activities": [{
    "name": "Nature's Valley Beach",
    "description": "activity description"
  }, {
    "name": "Keurbooms Beach",
    "description": "activity description"
  }, {
    "name": "Central Beach",
    "description": "activity description"
  }, {
    "name": "Robberg Beach",
    "description": "activity description"
  }]
}, {
  "category": "Water Activities",
  "activities": [{
    "name": "Sea Kayaking Robberg",
    "description": "activity description"
  }, {
    "name": "Keurbooms River Canooing",
    "description": "activity description"
  }, {
    "name": "Groot River Lagoon Canooing",
    "description": "activity description"
  }]
}, {
  "category": "Animal Activities",
  "activities": [{
    "name": "Monkey Land",
    "description": "activity description"
  }, {
    "name": "Birds of Eden",
    "description": "activity description"
  }, {
    "name": "Tenikwa Wildlife Rehabilitation",
    "description": "activity description"
  }, {
    "name": "Elephant Sanctuary",
    "description": "activity description"
  }]
}, {
  "category": "Adrenaline Activities",
  "activities": [{
    "name": "Skydive Plett",
    "description": "activity description"
  }, {
    "name": "Bloukrans Bungy Jump",
    "description": "activity description"
  }]
}];

const ExploreOptions = () => (
  <div>
    {exploreData.map(cat => (
      <ExploreCategory
        key={cat.category}
        title={cat.category}
        activities={cat.activities}
        open={true}
      />
    ))}
  </div>
);

export default ExploreOptions;