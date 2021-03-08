const skills = [
    {id: 187187, skill: 'Wheeling It', learned: true},
    {id: 420420, skill: 'Cutting Dubplates', learned: false},
    {id: 666666, skill: 'Bigging Up Ya Chest', learned: true},
    {id: 091085, skill: 'Gunfingas', learned: true},
    {id: 710710, skill: 'Putting the needle on the rekkid', learned: true},
    {id: 773773, skill: 'Digging in the crates', learned: true}
  ];

  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
  };
  
  function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
  }

  function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.learned = true;
    skills.push(skill);
  }

  function getAll() {
    return skills;
  }

  function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
  };