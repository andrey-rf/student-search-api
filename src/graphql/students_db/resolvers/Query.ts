import { UserInputError } from 'apollo-server-errors';
import { cpf as cpfValidator } from 'cpf-cnpj-validator';

import db from '../../../db/connect';
import { Student } from './types';

const listStudents = async (
	_: any,
	{ text }: { text: string }
): Promise<Student[]> => {
	if (!text) {
		return db('students').select();
	}

	const queryText = `%${text}%`;

	const result = await db('students')
		.where('name', 'ilike', queryText)
		.orWhere('cpf', 'ilike', queryText)
		.orWhere('email', 'ilike', queryText)
		.select();

	return result;
};

const getStudent = async (_: any, { cpf }: { cpf: string }) => {
	if (!cpfValidator.isValid(cpf)) {
		throw new UserInputError('CPF inválido', {
			argumentName: 'cpf',
		});
	}

	const result = await db('students').where({ cpf }).first();

	return result;
};

export default {
	listStudents,
	getStudent,
};
