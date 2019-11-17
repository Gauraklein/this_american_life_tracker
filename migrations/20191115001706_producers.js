exports.up = function(knex) {
    return knex.schema.createTable('producers', (table) => {
        table.integer('episode_number')
        table.foreign('episode_number').references("episodes.episode_number")
        table.string('episode_title')
        table.integer('act_number')
        table.foreign('act_number').references("acts.act_number")
        table.string('act_title')
        table.string('producer')

    })
};

exports.down = function(knex) {
    return knex.schema.raw('DROP TABLE producers')
};
