import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  knex.schema.withSchema('quero').createTable('campus', (table) => {
    table.increments();
    table.string('name');
    table.string('city');
    table.timestamps();
  });
}

export async function down(knex: Knex): Promise<void> {
  knex.schema.withSchema('quero').dropTable('campus');
}
