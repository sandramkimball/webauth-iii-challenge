
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tusers').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Odin', password: 'Odin'},
      ]);
    });
};
