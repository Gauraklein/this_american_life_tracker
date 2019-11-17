exports.up = function(knex) {
    return knex.schema.createTable('acts', (table) => {
        table.integer('episode_number')
        table.foreign('episode_number').references('episodes.episode_number')
        table.string('episode_title')
        table.integer('act_number').primary().unique()
        table.string('act_title')
        table.string('producers')
        table.string('act_description', 1000)
        table.string('act_song')

    })
};

exports.down = function(knex) {
    return knex.schema.raw('DROP TABLE acts')
};
