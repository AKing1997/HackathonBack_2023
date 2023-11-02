# Proyecto de API para Gestión de Skins de Videojuego
Este proyecto consiste en la creación de una API que permite a las personas usuarias consultar, adquirir, modificar y eliminar skins para un videojuego. Las skins son elementos estéticos que los jugadores pueden adquirir y personalizar en el juego.

## Requisitos del Proyecto
### Aplicaciones necesarias para el funcionamiento del proyecto
| Nombre      | Versión        | Link                                      | Comando - "CMD"               |
| ----------- | -------------- | ----------------------------------------- | ------------------------------ |
| Node        | v18.18.2       | [Descargar](https://nodejs.org/dist/v18.18.2/node-v18.18.2-x64.msi) |                               |
| NPM         | v10.2.1        | [Instrucciones de Instalación](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) | `npm install -g npm@10.2.1` |
| NestJS      | v10.1.18       | [Guía de Inicio](https://docs.nestjs.com/first-steps) | `npm i -g @nestjs/cli`         |

## Dependencias del Proyecto
### Dependencias del Proyecto (Se instalan automáticamente)
| Nombre             | Versión  | Link                                            | Comando - "CMD"                              |
| ------------------ | -------- | ----------------------------------------------- | --------------------------------------------- |
| Swagger            | v18.18.2 | [Documentación](https://docs.nestjs.com/openapi/introduction) | `npm install --save @nestjs/swagger`         |
| TypeORM & mysql12  | v10.2.1  | [Guía de TypeORM](https://docs.nestjs.com/recipes/sql-typeorm) | `npm install --save @nestjs/typeorm typeorm mysql2` |
| Class-validator & Class-transformer | v10.2.1 | [Documentación](https://docs.nestjs.com/pipes#class-validator) | `npm i --save class-validator class-transformer` |
| Bcrypt             | v10.2.1  | [Seguridad y Hashing](https://docs.nestjs.com/security/encryption-and-hashing#hashing) | `npm i bcrypt` & `npm i -D @types/bcrypt` |
| JWT                | v10.2.1  | [Autenticación JWT](https://docs.nestjs.com/security/authentication#jwt-token) | `npm install --save @nestjs/jwt`             |

## Instrucciones de Configuración
### Punto Uno: Instalación de Aplicaciones Necesarias
Asegúrate de tener instaladas todas las aplicaciones necesarias para el funcionamiento del proyecto.
1. Primero, instala todas las aplicaciones requeridas mencionadas en la sección "Aplicaciones necesarias para el proyecto".
2. Abre una línea de comandos (CMD) y navega hasta la carpeta del proyecto.
3. Ejecuta el siguiente comando, dependiendo de tu elección:
  - Para utilizar npm: `npm install`
  - Para utilizar yarn: `yarn install`
Esto instalará todas las dependencias necesarias para el funcionamiento del proyecto.

### Punto Dos: Configuración de la Base de Datos
1. El proyecto se configura inicialmente con una base de datos llamada "skins" y la opción `synchronize` establecida en "false". Esta configuración se encuentra en `src/app.module.ts`.
2. Configura la base de datos con tus propios datos, incluyendo usuario, contraseña, puerto, host y nombre de la base de datos.
3. Antes de ejecutar la API por primera vez, cambia la opción `synchronize` de "false" a "true" en `src/app.module.ts`. Esto permitirá que la aplicación genere automáticamente las tablas en la base de datos. Sin embargo, después de la primera ejecución, debes volver a establecer `synchronize` en "false" para evitar errores si ejecutas la aplicación nuevamente.

### Punto Tres: Configuración del Endpoint de la API
1. Puedes configurar el endpoint de la API en `src/API\constants\constants.ts`.
2. Si deseas cambiar el puerto o el host, puedes hacerlo en ese archivo. El puerto predeterminado es 3000, y el host predeterminado es "localhost". Modifícalos según tus necesidades.
3. Por defecto, el endpoint es `http://localhost:3000/`, y al abrirlo en el navegador, te mostrará una página de Swagger para interactuar con la API sin necesidad de aplicaciones de terceros. Ten en cuenta que todos los endpoints son privados y requieren un token.

### Punto Cuatro: Arranque de la API
1. Para iniciar la API, utiliza el siguiente comando:
  - Para iniciar en modo producción: `npm run start`
  - Para iniciar en modo desarrollo: `npm run start:dev`
  Estos comandos te permitirán iniciar la API en el modo deseado.
2. Para acceder a los endpoints privados, primero debes registrar una cuenta y obtener un token. Luego, haz clic en el candado en la página de Swagger y proporciona el token para acceder a los otros endpoints privados.

## Datos Dummy
`Dentro de la carpeta del proyecto se proporciona un archivo JSON llamado dummy.json, que contiene skins de Fortnite. Puedes insertarlos utilizando el endpoint CreateSkins copiando los datos desde el archivo y pasándolos como entrada.`

## Modelo de Datos
1. Modelo de Skin
Hemos definido una estructura de datos para representar las skins. Cada skin tiene campos como `id`, `nombre`, `tipo`, `precio`, `color`, entre otros. Este modelo sirve como base para gestionar las skins en la aplicación.
2. Leer Skins desde un Archivo
Implementamos una función para leer las skins disponibles desde un archivo JSON. Esto nos permite cargar las skins iniciales en la aplicación.
3. Configuración de la Base de Datos
Hemos configurado una base de datos MySQL para almacenar información sobre las skins compradas por los usuarios.
4. Rutas de la API
El proyecto implementa las siguientes rutas de la API:
- `GET /skins/available`: Devuelve una lista de todas las skins disponibles para comprar.
- `POST /skins/buy`: Permite a los usuarios adquirir una skin y guardarla en la base de datos.
- `GET /skins/myskins`: Devuelve una lista de las skins compradas por el usuario.
- `PUT /skins/color`: Permite a los usuarios cambiar el color de una skin comprada.
- `DELETE /skins/delete/{id}`: Permite a los usuarios eliminar una skin comprada.
- `GET /skins/getskin/{id}`: Devuelve una skin específica.