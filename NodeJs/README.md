# Node JS + TypeScript


## Configuration

To run the application on your local environment, make sure to follow these steps:

1. Clone this repository to your local machine.
2. Install the dependencies by running `npm install`.
3. Configure the database in the `ormconfig.json` file with your credentials and connection details.
4. Start the application with `npm start`.

## Contributions

We appreciate any contributions! If you want to improve this application, you can fork the repository, make your changes, and submit a pull request.

## Contact

If you have any questions or need assistance, feel free to reach out to us at [email@example.com](mailto:dario@gmail.com).

Thank you for using our book and author management application!


## Routes 

### Crear un Nuevo Libro

- **Ruta:** `POST /books`
- **Controlador:** `createBook`
- **Descripción:** Esta ruta te permite crear un nuevo libro en la base de datos.

{
  "title": "Mi Libro",
  "chapters": 1605,
  "pages": 2005,
  "authorIds": [1]
}

### Obtener Lista de Libros

- **Ruta:** `GET /books`
- **Controlador:** `getBooks`
- **Descripción:** Esta ruta devuelve una lista de todos los libros almacenados en la base de datos.

### Obtener Promedio de Páginas por Capítulo para un Libro

- **Ruta:** `GET /books/:id/averagePagesPerChapter`
- **Controlador:** `getAveragePagesPerChapter`
- **Descripción:** Esta ruta calcula y devuelve el promedio de páginas por capítulo para un libro específico, identificado por su ID.

## Rutas de Autores

### Crear un Nuevo Autor

- **Ruta:** `POST /authors`
- **Controlador:** `createAuthor`
- **Descripción:** Esta ruta te permite crear un nuevo autor en la base de datos.

{
  "name": "Juan Rios",
  "bookIds": [1,2]
}

### Obtener Lista de Autores

- **Ruta:** `GET /authors`
- **Controlador:** `getAuthors`
- **Descripción:** Esta ruta devuelve una lista de todos los autores almacenados en la base de datos.
