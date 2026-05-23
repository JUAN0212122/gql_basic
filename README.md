# Lab 6 - Integración GraphQL con MongoDB y Docker

## Descripción
En este laboratorio se integró la API GraphQL con una base de datos **MongoDB**, utilizando **Docker** para levantar el entorno de desarrollo de forma aislada y consistente.

---

## Objetivo
Conectar la API a una base de datos NoSQL (MongoDB) y ejecutar todo el sistema dentro de contenedores Docker para facilitar su despliegue.

---

## Estructura del proyecto

- **src/** → Código fuente de la API GraphQL
- **models/** → Modelos de MongoDB (Mongoose)
- **schemas/** → Definición de tipos GraphQL
- **resolvers/** → Lógica de consultas y mutaciones
- **Dockerfile** → Imagen de la aplicación
- **docker-compose.yml** → Configuración de servicios (API + MongoDB)
