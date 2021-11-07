import { Knex } from 'knex';

import { data } from '../data/students';

export async function clear(knex: Knex) {
	await knex('students').del();
}

export async function seed(knex: Knex) {
	await clear(knex);
	await knex('students').insert(data);
}
