import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  knex.schema.withSchema('quero').createTable('courses', (table) => {
    table.increments();
    table
      .integer('university')
      .references('university.id')
      .notNullable()
      .onDelete('CASCADE');
    table
      .integer('campus_id')
      .references('campus.id')
      .notNullable()
      .onDelete('CASCADE');
    table.string('name');
    table.string('kind');
    table.string('level');
    table.string('shift');
    table.timestamps();
  });
}

export async function down(knex: Knex): Promise<void> {
  knex.schema.withSchema('quero').dropTable('courses');
}
