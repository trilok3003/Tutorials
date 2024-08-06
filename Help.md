https://codepen.io/team/Orbis/pen/OaXreJ
https://stackoverflow.com/questions/55275193/how-to-make-chips-using-bootstrap-4-in-input-field

https://embed.plnkr.co/plunk/hVDNb4

const toEntities = (collection) => {
  return collection.reduce((prev, next) => ({
    ...prev,
    [next.id]: next
  }), {});
};

const data = [
  { id: 'aX5Hj9', title: 'Visit Pokémart', members: ['blastoise', 'haunter'] },
  { id: 'e4Gf9a', title: 'Climb Pokémon Tower', members: ['articuno', 'pikachu'] },
  { id: 't3lP01', title: 'Update Pokédex', members: ['charizard', 'alakazam'] },
];

/*
 {
    'aX5Hj9': { id: 'aX5Hj9', title: 'Visit Pokémart', members: ['blastoise', 'haunter'] },
    'e4Gf9a': { id: 'e4Gf9a', title: 'Climb Pokémon Tower', members: ['articuno', 'pikachu'] },
    't3lP01': { id: 't3lP01', title: 'Update Pokédex', members: ['charizard', 'alakazam'] },
  }
*/

const entities = toEntities(data);

console.log(entities);

const { entities } = state;

// Array(3) [{...}, {...}, {...}]
const allTasks = Object.keys(entities).map(id => entities[id]);
