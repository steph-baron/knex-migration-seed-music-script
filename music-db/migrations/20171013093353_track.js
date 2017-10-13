
exports.up = function(knex, Promise) {
  return knex.schema.createTable('track', function(table){
    table.increments('id');
    table.text('name');
    table.integer("artist_id");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('track');
};
