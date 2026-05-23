# Lab 7 - Gestión de Skills y Empleados con MongoDB

## Descripción
En este laboratorio se implementó una API GraphQL conectada a **MongoDB**, enfocada en la gestión de **empleados y sus habilidades (skills)**. Se realizaron consultas y mutaciones para crear, consultar y relacionar datos.

---

## Objetivo
Modelar empleados y skills en MongoDB y exponerlos mediante GraphQL, permitiendo operaciones CRUD y relaciones entre entidades.

---

## Estructura del proyecto

- **models/** → Modelos de MongoDB (Employee, Skill)
- **schemas/** → Definición de tipos GraphQL
- **resolvers/** → Lógica de consultas y mutaciones
- **database/** → Conexión a MongoDB
- **docker-compose.yml** → Levantamiento del entorno (API + MongoDB)

---

## Ejemplo de Query

```graphql id="q7"
query {
  employees {
    id
    name
    position
    skills {
      id
      name
    }
  }
}