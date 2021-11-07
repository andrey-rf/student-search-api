import { UserInputError } from "apollo-server-errors";

import db from "../../../db/connect";
import { Student } from "./types";

const addStudent = async (
  _: Student,
  student: Student,
): Promise<Student> => {
  await db("students")
    .insert(student)

  return student;
}

const updateStudent = async (
  _: Student,
  student: Student
): Promise<Student> => {
  const { cpf } = student
  if (!cpf) {
    throw new UserInputError("Invalid CPF", {
      argumentName: "cpf",
    });
  }

  await db("students")
    .where({ cpf })
    .update(student)

  return student;
}

const deleteStudent = async (
  _: any,
  { cpf }: { cpf: string }
): Promise<string> => {
  if (!cpf) {
    throw new UserInputError("Invalid CPF", {
      argumentName: "cpf",
    });
  }

  await db("students")
    .where({ cpf })
    .del()

  return cpf;
}

export default {
  addStudent,
  updateStudent,
  deleteStudent,
}