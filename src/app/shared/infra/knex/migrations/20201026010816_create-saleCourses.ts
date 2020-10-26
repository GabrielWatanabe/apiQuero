import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  knex.schema.withSchema('quero').createTable('saleCourse', (table) => {
    table.increments();
    table
      .integer('courses_id')
      .references('courses.id')
      .notNullable()
      .onDelete('CASCADE');
    table.float('full_price');
    table.float('price_with_discount');
    table.float('discount_percentage');
    table.string('start_date');
    table.string('enrollment_semester');
    table.boolean('enabled');
    table.timestamps();
  });
}

export async function down(knex: Knex): Promise<void> {
  knex.schema.withSchema('quero').dropTable('saleCourse');
}
