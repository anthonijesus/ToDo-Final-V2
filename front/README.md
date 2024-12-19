# TODO LIST CON REACT

La apliación está desarrollada usando la libreria de React, por lo tanto para que se ejecute en su pc precisará instalar lo siguiente:

- Instalar node js (https://nodejs.org/en/)
- Instalar Git (https://git-scm.com/downloads)
  - Por defecto Git instala una terminal llamada Git Bash, cuyo acceso directo quedará en el escritorio, lo ejecutamos.
  - Crear una carpeta en el directorio de su preferencia (por ejemplo C:\TodoList)
  - Acceder con el Git Bash al directorio creado (ejecuta --> cd C:\TodoList)
  - En dicho directorio ejecuta los siguientes comandos:
    _ Clona el siguiente repositorio de Github: "git clone https://github.com/anthonijesus/ToDo-Final-V2.git"
    _ Luego dirigete a la carpeta clonada (cd C:\TodoList\ToDo-Final-V2)
    \_ Instala las dependencias que precisa el proyecto para funcionar. Dirigite primero a: C:\ToDoList\ToDo-Final-V2\front y ejecuta el comando ---> "npm install", luego dirigete a: C:\ToDoList\ToDo-Final-V2\server y ejecuta el comando ---> "npm install"
    \_ Ahora precisas crear un archivo .env (en la raiz de la carpeta C:\ToDoList\ToDo-Final-V2\server) con los siguientes valores:
    MONGODB_URI=mongodb+srv://anthonijesus:Nore257-@cluster0.9inkp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
    PORT=3001
    JWT_SECRET=790f002f0e03f27ca12b78a5a992cee1ee0b917e2140f04ad5cee4a281bc2601
    \_ Finalmente ejecuta el comando "npm run dev" en cada uno de los directorios del proyecto, es decir, en el front (C:\ToDoList\ToDo-Final-V2\front) y en el server(C:\ToDoList\ToDo-Final-V2\server)
    \_ Abre el navegador de tu preferencia y escribe en la barra de direcciones "http://localhost:5173/" para realizar las pruebas en la app.

# FUNCIONALIDAD DEL TODO LIST

La aplicación basicamente consta de dos partes:

1. Sección con un formulario para agregar nuevas tareas (La cual puede cambiar si en la lista de tareas hacemos click en el icono de edición)

- Acá simplemente debes agregar un titulo a la tarea seguido de una descricpión de la misma

2. Una sección con la lista de tareas que vayas agragando. Que consta de una tabla con los campos: Acciones, Tarea, Descripción, Estado y Creador de la tarea (de momento este dato es estático)

- En esta sección ya listadas las tareas podrás:
  - Editar la tarea, tanto el nombre como la descripción
  - Marcar la tarea como completada, la cual se le aplicará un estilo para diferenciarla de las que aún están pendientes
  - Eliminar la tarea, se te preguntará si estás seguro de la acción y de confirmar, la misma será borrada de la lista.
