import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  knex.schema.withSchema('quero').createTable('university', (table) => {
    table.increments();
    table.string('name');
    table.float('score');
    table.string('logo_url');
    table.timestamps();
  });
}

export async function down(knex: Knex): Promise<void> {
  knex.schema.withSchema('quero').dropTable('university');
}
