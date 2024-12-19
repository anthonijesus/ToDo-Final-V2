# TODO LIST CON REACT

La apliación está desarrollada usando la libreria de React, por lo tanto para que se ejecute en su pc precisará instalar lo siguiente:

- Instalar node js (https://nodejs.org/en/)
- Instalar Git (https://git-scm.com/downloads)
- Por defecto Git instala una terminal llamada Git Bash, cuyo acceso directo quedará en el escritorio, lo ejecutamos.
- Crear una carpeta en el directorio de su preferencia (por ejemplo C:\TodoList)
- Acceder con el Git Bash al directorio creado (ejecuta --> cd C:\TodoList)
- En dicho directorio ejecuta los siguientes comandos:
  - Clona el siguiente repositorio de Github: "git clone https://github.com/anthonijesus/ToDo-Final-V2.git"
  - Luego dirigete a la carpeta clonada (cd C:\TodoList\ToDo-Final-V2)
  - Instala las dependencias que precisa el proyecto para funcionar. Dirigite primero a: C:\ToDoList\ToDo-Final-V2\front y ejecuta el comando ---> "npm install", luego dirigete a: C:\ToDoList\ToDo-Final-V2\server y ejecuta el comando ---> "npm install"
  - Ahora precisas crear un archivo .env (en la raiz de la carpeta C:\ToDoList\ToDo-Final-V2\server) con los siguientes valores:
    - MONGODB_URI=mongodb+srv://anthonijesus:Nore257-@cluster0.9inkp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
    - PORT=3001
    - JWT_SECRET=790f002f0e03f27ca12b78a5a992cee1ee0b917e2140f04ad5cee4a281bc2601
  - Tambien precisas crear otro archivo .env (pero en la raiz de la carpeta C:\ToDoList\ToDo-Final-V2\front) con el siguiente valor:
    - VITE_API_URL=http://localhost:3001
  - Finalmente ejecuta el comando "npm run dev" en cada uno de los directorios del proyecto, es decir, en el front (C:\ToDoList\ToDo-Final-V2\front) y en el server(C:\ToDoList\ToDo-Final-V2\server)
  - Abre el navegador de tu preferencia y escribe en la barra de direcciones "http://localhost:5173/" para realizar las pruebas en la app.

# FUNCIONALIDAD DEL TODO LIST

- Ante todo registrate como nuevo usuario con el enlace fijado en la parte inferior del login.

- Luego podrás iniciar sesión con los datos creados.

- En la parte central de bienvenida podrás ver el nombre del usuario que ha iniciado sesión.

- En la parte superior podrás visualizar la fecha y país.

- En la parte superior derecha podrás ver un botón para cerrar sesión.

- En la parte izquierda podrás ver un menú de opciones:

  - Un bonton de pagina principal que te llevará a la página de bienvenida sin importar el apartado del sistema que estes usando.

  - Un menú de opciones donde podrás:
    - Crear una nueva tarea
    - Ver las tareas pendientes
    - Ver las tareas completadas

- Adicionalmente, tiene un boton que te llevará a una página donde puedes actualizar tu perfil de usuario, cambiando tu nombre de usuario, nombre, email o contraseña.

- Además, en la lista de tareas (tanto pendiente como completadas) tiene botones para:
  - Editar la tarea
  - Marcar la tarea como completada
  - Eliminar la tarea
