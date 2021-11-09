import { gql } from 'apollo-server-express';

const typeDefs = gql`
	type Student {
		name: String!
		cpf: String!
		email: String!
	}

	type Query {
		listStudents(text: String): [Student!]!
		getStudent(cpf: String!): Student
	}

	type Mutation {
		addStudent(name: String!, cpf: String!, email: String!): Student!
		updateStudent(cpf: String!, name: String!, email: String!): Student!
		deleteStudent(cpf: String!): String!
	}
`;

export default typeDefs;
