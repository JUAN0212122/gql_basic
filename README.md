# Lab 3 - GraphQL (Schemas, Resolvers y Queries)

## Descripción
En este laboratorio se trabajó la estructura de una API GraphQL separando de forma organizada los **schemas**, **resolvers** y **consultas**.

---

## Estructura del proyecto

- **Schemas:** Definen los tipos de datos y las consultas disponibles.
- **Resolvers:** Contienen la lógica para responder a las consultas.
- **Queries:** Permiten obtener información desde el servidor GraphQL.

---

## Ejemplo de Query

```graphql
query {
  users {
    id
    name
    email
  }
}