
exports.up = function(knex) {
    return knex.schema.createTable('episodes', (table) => {
        table.integer('id')
        table.integer('number')
        table.string('title')
        table.string('description', 1000)
        table.date('date')
        table.integer('user_rating')
        table.boolean('listened_to')
        table.string('image_url')
        table.string('podcast_url')
        table.string('slug')

    })
};

exports.down = function(knex) {
    return knex.schema.raw('DROP TABLE episodes')
};
