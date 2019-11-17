
exports.up = function(knex) {
    return knex.schema.createTable('episodes', (table) => {
        table.integer('episode_number').primary().unique()
        table.string('episode_title')
        table.string('description', 1000)
        table.date('date_published')
        table.string('image_url')
        table.string('podcast_url')
        table.integer('number_of_acts')
        table.string('slug')
        table.integer('user_rating')
        table.boolean('listened_to')

    })
};

exports.down = function(knex) {
    return knex.schema.raw('DROP TABLE episodes')
};
