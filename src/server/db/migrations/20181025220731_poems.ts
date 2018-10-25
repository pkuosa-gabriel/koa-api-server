import * as Knex from 'knex';

exports.up = (knex, Promise) => {
  return knex.schema.createTable('poems', table => {
    table.increments();
    table
      .string('name')
      .notNullable()
      .unique();
    table.string('author').notNullable();
    table.integer('votes').notNullable();
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('poems');
};
