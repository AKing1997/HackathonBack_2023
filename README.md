# Proyecto de API para Gestión de Skins de Videojuego

Este proyecto consiste en la creación de una API que permite a las personas usuarias consultar, adquirir, modificar y eliminar skins para un videojuego. Las skins son elementos estéticos que los jugadores pueden adquirir y personalizar en el juego.

## Requisitos del Proyecto

#### ``Aplicaciones necesarias para funcionamiento de proyecto``

| Nombre        | Versión           | Link  | Comando - "CMD" |
| ------------- |:-------------:| -----:| ----------------------------:|
| Node | v18.18.2 | [Link](https://nodejs.org/dist/v18.18.2/node-v18.18.2-x64.msi) | |
| NPM | v10.2.1 | [Link](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) | npm install -g npm@10.2.1 |
| NestJS | v10.1.18 | [Link](https://docs.nestjs.com/first-steps) | npm i -g @nestjs/cli |


## Dependencias del Proyecto

| Nombre        | Versión           | Link  | Comando - "CMD" |
| ------------- |:-------------:| -----:| ----------------------------:|
| Swagger | v18.18.2 | [Link](https://docs.nestjs.com/openapi/introduction) | npm install --save @nestjs/swagger |
| TypeORM & mysql12 | v10.2.1 | [Link](https://docs.nestjs.com/recipes/sql-typeorm) | npm install --save @nestjs/typeorm typeorm mysql2 |
| Class-validator & Class-transformer | v10.2.1 | [Link](https://docs.nestjs.com/pipes#class-validator) | npm i --save class-validator class-transformer |
| Bcrypt | v10.2.1 | [Link](https://docs.nestjs.com/security/encryption-and-hashing#hashing) | npm i bcrypt & npm i -D @types/bcrypt |
| JWT | v10.2.1 | [Link](https://docs.nestjs.com/security/authentication#jwt-token) | npm install --save @nestjs/jwt |

#### ``1. Modelo de Skin``
Hemos definido una estructura de datos para representar las skins. Cada skin tiene campos como `id`, `nombre`, `tipo`, `precio`, `color`, entre otros. Este modelo sirve como base para gestionar las skins en la aplicación.

#### ``2. Leer Skins desde un Archivo``
Implementamos una función para leer las skins disponibles desde un archivo JSON. Esto nos permite cargar las skins iniciales en la aplicación.

#### ``3. Configuración de la Base de Datos``
Hemos configurado una base de datos MySQL para almacenar información sobre las skins compradas por los usuarios.

#### ``4. Rutas de la API``
El proyecto implementa las siguientes rutas de la API:

- `GET /skins/available`: Devuelve una lista de todas las skins disponibles para comprar.
- `POST /skins/buy`: Permite a los usuarios adquirir una skin y guardarla en la base de datos.
- `GET /skins/myskins`: Devuelve una lista de las skins compradas por el usuario.
- `PUT /skins/color`: Permite a los usuarios cambiar el color de una skin comprada.
- `DELETE /skins/delete/{id}`: Permite a los usuarios eliminar una skin comprada.
- `GET /skins/getskin/{id}`: Devuelve una skin específica.

## Documentación

#### ``Configuración del Proyecto``
1. Clona este repositorio.
2. Instala las dependencias del proyecto con `npm install`.
3. Configura la conexión a la base de datos en el archivo de configuración.
4. Ejecuta la aplicación con `npm start`.
5. Tienen más opciones de ejecución de proyecto en la carpeta skins.

#### ``Uso de la API``
- Visita `http://localhost:3000/skins/available` para obtener la lista de skins disponibles.
- Usa `http://localhost:3000/skins/buy` para comprar una skin.
- Consulta `http://localhost:3000/skins/myskins` para ver tus skins compradas.
- Accede a `http://localhost:3000/skins/color` para cambiar el color de una skin.
- Utiliza `http://localhost:3000/skins/delete/{id}` para eliminar una skin comprada.
- Obtén una skin específica en `http://localhost:3000/skins/getskin/{id}`.


¡Espero ayudar en algo con este proyecto! ¡Buena suerte!
