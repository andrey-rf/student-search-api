import { UserInputError } from 'apollo-server-errors';
import { cpf as cpfValidator } from 'cpf-cnpj-validator';
import emailValidator from 'email-validator';

import db from '../../../db/connect';
import { Student } from './types';

const verifyDataValidity = ({ name, cpf, email }: Student) => {
	if (!name) {
		throw new UserInputError('Por favor, insira um nome', {
			argumentName: 'name',
		});
	}

	if (!cpf) {
		throw new UserInputError('Por favor, insira um CPF', {
			argumentName: 'cpf',
		});
	} else if (!cpfValidator.isValid(cpf)) {
		throw new UserInputError('CPF inválido', {
			argumentName: 'cpf',
		});
	}

	if (!email) {
		throw new UserInputError('Por favor, insira um email', {
			argumentName: 'email',
		});
	} else if (!emailValidator.validate(email)) {
		throw new UserInputError('Email inválido', {
			argumentName: 'email',
		});
	}
};

const addStudent = async (_: Student, student: Student): Promise<Student> => {
	verifyDataValidity(student);
	const { cpf, email } = student;

	const found = await db('students')
		.where({ cpf })
		.orWhere({ email })
		.first();

	if (found) {
		throw new UserInputError('Estudante já cadastrado');
	}

	await db('students').insert(student);

	return student;
};

const updateStudent = async (
	_: Student,
	student: Student
): Promise<Student> => {
	verifyDataValidity(student);
	const { cpf } = student;

	await db('students').where({ cpf }).update(student);

	return student;
};

const deleteStudent = async (
	_: string,
	{ cpf }: { cpf: string }
): Promise<string> => {
	if (!cpfValidator.isValid(cpf)) {
		throw new UserInputError('CPF inválido', {
			argumentName: 'cpf',
		});
	}

	await db('students').where({ cpf }).del();

	return cpf;
};

export default {
	addStudent,
	updateStudent,
	deleteStudent,
};
