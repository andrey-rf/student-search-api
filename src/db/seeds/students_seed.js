const studentsData = require("../../data/students");

async function clear(knex) {
  await knex('students').del();
}

async function seed(knex) {
  await clear(knex);
  await knex('students').insert(studentsData);
};

module.exports = { clear, seed };
