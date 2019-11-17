

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex
    .select("*")
    .from("producers")
    .del()
    .then(() => {
      return knex
        .select("*")
        .from("acts")
        .del();
    })
    .then(() => {
      return knex
        .select("*")
        .from("episodes")
        .del();
    });
  // .then(() => {return knex.select('*').from('Commits').del()})
  // .then(() => {return knex.select('*').from('Users').del()})
  // .then(() => {return knex.select('*').from('Students').del()})
  // .then(() => {return knex.select('*').from('Cohorts').del()})
};