import Query from './Query';
import Mutation from './Mutation';

export const resolvers = {
  Query: {
    listStudents: Query.listStudents,
    getStudent: Query.getStudent,
  },
  Mutation: {
    addStudent: Mutation.addStudent,
    updateStudent: Mutation.updateStudent,
    deleteStudent: Mutation.deleteStudent,
  }
}