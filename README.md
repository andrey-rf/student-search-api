# Desafio Técnico Descomplica - Andrey Fontoura

Projeto de API de consulta de alunos utilizando NextJS + Typescript, consumindo uma API em GarphQL. Providencia os dados a serem consumidos pela [interface](https://github.com/andrey-rf/student-search-front).

## Schema

### Query

#### `listStudents`

Retorna uma lista de alunos, filtrada através de um texto opcional que será aplicado aos três campos de dados do aluno. Caso nada seja passado ao filtro, retornará a lista completa.

```gql
query allStudents($text: String) {
	listStudents(text: $text) {
		name
		cpf
		email
	}
}
```

#### `getStudent`

Retorna um único estudante, baseado no argumento obrigatório `cpf`.

```gql
query getStudents($cpf: String) {
	getStudent(cpf: $cpf) {
		name
		cpf
		email
	}
}
```

### Mutations

#### `addStudent`

Recebe CPF, nome e email de um estudante, faz as verificações necessárias, adiciona o estudante ao banco de dados, caso as verificações sejam bem-sucedidas e retorna o estudante adicionado.

```gql
mutation AddStudent($name: String!, $cpf: String!, $email: String!) {
	addStudent(name: $name, cpf: $cpf, email: $email) {
		name
		email
		cpf
	}
}
```

#### `updateStudent`

Recebe CPF, nome e email de um estudante, faz as verificações necessárias, edita o estudante já presente no banco de dados, com base no CPF, caso as verificações sejam bem-sucedidas e retorna o estudante atualizado.

```gql
mutation UpdateStudent($name: String!, $cpf: String!, $email: String!) {
	updateStudent(cpf: $cpf, name: $name, email: $email) {
		name
		email
		cpf
	}
}
```

#### `deleteStudent`

Recebe um CPF, faz as verificações necessárias e apaga do banco de dados o estudante correspondente a esse dado, retornando o CPF do estudante excluído.

```gql
mutation DeleteStudent($cpf: String!) {
	deleteStudent(cpf: $cpf)
}
```

### Instruções para uso

### Docker

Caso faça uso do Docker, é possível rodar a aplicação utilizando o comando `docker-compose up` na pasta raiz do projeto. Sua aplicação será executada e servida através da porta `4000`.

### Local

Se preferir rodar a aplicação localmente, é possível utilizar o comando `yarn start` para executá-la.

## Variáveis de ambiente

O banco de dados está hospedado no Heroku. Para acessá-lo com esta API, é necessário adicionar as seguintes informações a um arquivo `.env` na raiz do projeto:

```
DB_HOST=ec2-54-160-35-196.compute-1.amazonaws.com
DB_USER=odmadxvheropym
DB_PASSWORD=e984e511e49d89797fd370ae9e62470188d5ab843f3d41b879654a801d254763
DB_DATABASE=d3dcgua89crmjf
DB_PORT=5432
```
