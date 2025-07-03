# API REST para Gestión de Productos con Firebase

Este proyecto consiste en una API REST construida con **Node.js**, **Express** y **Firebase Firestore** que permite realizar operaciones CRUD (crear, leer, actualizar y eliminar) sobre productos de un catálogo. Además, incluye autenticación mediante tokens JWT y manejo de errores según buenas prácticas.

## Tecnologías usadas

- **Express** para gestionar rutas y middleware.
- **Nodemon** para recargar automáticamente el servidor durante el desarrollo.
- **Firebase Firestore**
- **JSON Web Token (JWT)**
- **Dotenv**

## Funcionalidades

- Login de usuario (simulado) con JWT
- CRUD de productos en Firestore
- Rutas protegidas por autenticación
- Manejo de errores:
  - `400` para datos inválidos
  - `401` y `403` para errores de autenticación
  - `404` para rutas no definidas
  - `500` para errores del servidor

## Instalación

### 1. Clonar el repositorio 
```bash
https://github.com/sil-graci/armando_proyecto.git
cd armando_proyecto
```

### 2. Instalar dependencias

```bash
npm install
```
### 3. Crear un archivo .env en la raíz del proyecto con tus claves:
```env
PORT=3000
FB_API_KEY=TU_API_KEY
FB_AUTH_DOMAIN=TU_AUTH_DOMAIN
FB_PROJECT_ID=TU_PROJECT_ID
JWT_SECRET=una_clave_secreta_segura
```


## Comandos disponibles

### Iniciar el servidor

Este comando inicia el servidor en modo desarrollo con Nodemon:

```bash
npm run dev
```
## Uso básico

### Primero hacé login con:

```bash
POST /auth/login
```
### Cuerpo JSON:

```json
{
  "username": "admin",
  "password": "secret"
}
```

### Copiá el token recibido y usalo en las demás rutas protegidas agregando en el header:
```http
Authorization: Bearer <TU_TOKEN>
```
## Autora
Silvia Podberezski – Proyecto académico para Talento Tech 2025