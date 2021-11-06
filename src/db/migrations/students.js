
exports.up = function(knex) {
    return knex.schema.createTable('students', student => {
      student.increments();
      student.string('name').notNullable();
      student.string('cpf').notNullable();
      student.string('email').notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('students');
};
