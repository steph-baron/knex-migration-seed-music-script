
exports.up = function(knex, Promise) {
  return knex.schema.createTable('artist', function(table){
    table.increment('id').primary();
    table.string('name');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('artist');
};
