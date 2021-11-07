import { Knex } from 'knex';

export async function up(knex: Knex): Promise<any> {
	return knex.schema.createTable('students', student => {
		student.increments('id').primary();
		student.string('name').notNullable();
		student.string('cpf').notNullable().unique();
		student.string('email').notNullable().unique();
	});
}

export async function down(knex: Knex): Promise<any> {
	return knex.schema.dropTable('students');
}
