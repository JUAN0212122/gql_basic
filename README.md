# Lab 4 - GraphQL Mutations e Inputs

## Descripción
En este laboratorio se implementaron consultas y mutations en GraphQL utilizando datos simulados. Se trabajó la estructura de schemas, resolvers e inputs para manejar creación y consulta de información.

---

## Estructura del proyecto

- **Schemas:** Definen queries, mutations e inputs.
- **Resolvers:** Manejan la lógica de creación y actualización de datos.
- **Inputs:** Estructuran los datos enviados en las mutations.

---

## Ejemplo de Query + Mutation

```graphql
query {
  users {
    id
    name
    email
  }
}

mutation {
  createUser(input: {
    name: "Juan Perez"
    email: "juan.perez@email.com"
  }) {
    id
    name
    email
  }
}