# Lab 5 - GraphQL con Integración en Docker

## Descripción
En este laboratorio se integró la API GraphQL en un entorno de **Docker**, permitiendo ejecutar el proyecto de forma aislada y reproducible en cualquier máquina.

---

## Objetivo
Contenerizar la aplicación para facilitar su despliegue, asegurando que el entorno de ejecución sea consistente usando Docker.

---

## Estructura del proyecto

- **src/** → Código fuente de la API GraphQL
- **Dockerfile** → Configuración de la imagen del proyecto
- **docker-compose.yml** → Orquestación del contenedor
- **schemas & resolvers** → Lógica de GraphQL

---

## Ejecución con Docker

### 1. Construir la imagen
```bash
docker build -t graphql-api .