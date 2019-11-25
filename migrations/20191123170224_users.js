
exports.up = function(knex) {
    return knex.schema.createTable('users', (table) => {
        table.integer('id')
        table.string('username')
        table.string('user_email')
        table.string('user_password')


    })
};

exports.down = function(knex) {
    return knex.schema.raw('DROP TABLE users')
};
