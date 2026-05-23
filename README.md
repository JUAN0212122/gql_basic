# Lab 2 - GraphQL Queries con Datos Simulados

## Descripción
En este laboratorio se implementaron consultas en GraphQL.
## Objetivo
Practicar la creación y consumo de queries en GraphQL.

---

## Funcionalidades implementadas

- Consulta de lista de usuarios simulados
- Consulta de un usuario por IDgit branch

- Retorno de datos estructurados mediante GraphQL

---

## Ejemplo de consultas

### Obtener todos los usuarios
```graphql
query {
  users {
    id
    name
    email
  }
}