**Estructura de la Aplicación y Archivos en la Página Web de Eventos y Tareas**

**Descripción General**

La aplicación web de gestión de eventos y tareas está organizada de manera eficiente dentro de una estructura de carpetas que facilita el desarrollo y el mantenimiento. 
Utilizando JavaScript para la lógica de negocio y HTML para la estructura, la aplicación permite a los usuarios gestionar sus actividades mediante un sistema CRUD (Crear, Leer, Actualizar, Eliminar).

**Estructura de Carpetas**
**Dentro de la carpeta src, la organización se divide de la siguiente manera:**

**Carpeta js:**
Contiene los archivos JavaScript que gestionan la lógica de la aplicación.

**index.js:** Este archivo es el núcleo de la aplicación. Aquí se implementan todos los métodos necesarios para manejar las operaciones CRUD. Incluye funciones para guardar, editar, eliminar y listar eventos y tareas. Además, se encarga de la inicialización de la aplicación, cargando datos desde el almacenamiento local y renderizando la interfaz de usuario.
**register.js:** Contiene la lógica para el registro de nuevos usuarios. Este archivo gestiona el envío de datos del formulario de registro, asegurando que la información se valide y se almacene adecuadamente.
**login.js:** Maneja la autenticación de los usuarios. Incluye métodos para validar credenciales y gestionar el inicio de sesión, asegurando que solo los usuarios registrados puedan acceder a la plataforma.


**Carpeta css:**
Almacena los archivos CSS que estilizan la aplicación. Aquí se definen las reglas de estilo para asegurar que la interfaz sea atractiva y fácil de usar.

**Carpeta img:**
Contiene todos los recursos de imagen, incluidos logos y gráficos que se utilizan en la interfaz. Esto ayuda a mantener la organización visual y permite un acceso rápido a los elementos gráficos.

**Archivos HTML (Fuera de las Carpetas)**
En la raíz de la carpeta src, se encuentran los archivos HTML que definen la estructura de la aplicación. Estos archivos son fundamentales para la renderización de la interfaz y su interacción con los archivos JavaScript:

**index.html:** Este es el archivo principal que carga la aplicación. Incluye enlaces a los archivos CSS y JavaScript, así como la estructura básica del documento HTML. Contiene las secciones necesarias para mostrar la lista de eventos y tareas, así como los formularios de registro y login.

**register.html:** Este archivo proporciona la interfaz para que los nuevos usuarios se registren en la aplicación. Contiene el formulario de registro y se vincula a register.js para gestionar la lógica de registro.

**login.html:** Similar al archivo de registro, este documento presenta la interfaz de inicio de sesión. Se conecta a login.js para manejar la autenticación de usuarios.

**Procesos CRUD**
**Crear:** Los usuarios pueden agregar nuevos eventos y tareas a través de formularios en index.html. Los datos se gestionan en index.js, donde se almacenan en un array y se guardan en el almacenamiento local.

**Leer:** Al cargar la aplicación, index.js utiliza métodos para leer datos desde el almacenamiento local y renderizarlos en la interfaz, mostrando las listas de eventos y tareas.

**Actualizar:** Cuando un usuario edita un evento o tarea, los datos se cargan en un formulario prellenado. Al enviar el formulario, se invocan las funciones de index.js para actualizar los datos en el array y en el almacenamiento local.

**Eliminar:** Cada entrada en las listas tiene un botón de eliminación. Al hacer clic, se llama a una función de index.js que actualiza el estado y la interfaz.
