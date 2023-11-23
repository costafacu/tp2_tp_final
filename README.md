# Como levantar el proyecto

## Instalar dependencias
```bash
npm install
```

## Crear archivo .env
Duplicar el archivo `.env.example` y rellenar los campos solicitandolos al equipo de desarrollo. Por un tema de seguridad no son compartidos en este documento.

## Levantar el proyecto
De ser la primera vez que se levanta el proyecto, dirigirse al archivo `app.js` y setear los parametros del `connection.sync` en lo siguiente:
```json
{
  force: true
}
```

Luego levantamos el proyecto con:
```bash
npm run dev
```
O si lo queremos correr en producción o en ambiente Demo:
```bash
npm run start
```

Importante luego de levantar el proyecto por primera vez, volver a setear los parametros del `connection.sync` en lo siguiente para evitar perdida de información:
```json
{
  force: false
}
```

# Acceder a la colección de Postman
Para poder acceder a la colección de los endpoints del programa, vamos a acceder a nuestro Team Publico en Postman con el siguiente link: https://www.postman.com/tp22023c2g1/workspace/tp2-tp-final.

En este se van a poder visualizar todos los endpoints del programa, con sus respectivos parametros e información pre-rellenada.