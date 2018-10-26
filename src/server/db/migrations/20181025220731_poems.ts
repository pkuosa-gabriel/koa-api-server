import * as Knex from 'knex';

exports.up = (knex, Promise) => {
  return knex.schema.createTable('poems', table => {
    table.increments();
    table.string('title').notNullable();
    table.string('author').notNullable();
    table.text('contents').notNullable();
    table.integer('votes').defaultTo(0);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('poems');
};
