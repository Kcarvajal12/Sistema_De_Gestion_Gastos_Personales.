# Sistema_De_Gestion_Gastos_Personales.
📌 Descripción

Este proyecto permite administrar de forma organizada:

💰 Ingresos
💸 Gastos
📊 Balance financiero
🏷️ Categorías de transacciones
📅 Historial de movimientos

El sistema facilita el control de las finanzas personales mediante una aplicación web conectada a una base de datos en la nube.

🏗️ Arquitectura

El proyecto está desarrollado utilizando una arquitectura cliente-servidor:

🖥️ Frontend: Interfaz de usuario desarrollada con HTML, CSS y JavaScript
⚙️ Backend: API REST desarrollada con Node.js y Express
🗄️ Base de datos: MongoDB Atlas (NoSQL)
⚙️ Funcionalidades

El sistema permite:

➕ Crear transacciones (ingresos y gastos)
📋 Visualizar todas las transacciones
✏️ Editar transacciones existentes
❌ Eliminar transacciones
🔍 Filtrar por categoría y tipo
📈 Visualizar indicadores financieros:
Total de ingresos
Total de gastos
Balance
🔄 API REST

La aplicación implementa las siguientes rutas:

GET /api/transacciones → Obtener todas las transacciones
GET /api/transacciones/:id → Obtener una transacción por ID
POST /api/transacciones → Crear una nueva transacción
PUT /api/transacciones/:id → Actualizar una transacción
DELETE /api/transacciones/:id → Eliminar una transacción
⚠️ Manejo de errores

La API incluye manejo de errores para:

❗ 400 Bad Request → Datos inválidos
❗ 404 Not Found → Transacción no encontrada
❗ 500 Internal Server Error → Error del servidor

Esto permite una mejor comunicación entre el cliente y el servidor.

🛠️ Tecnologías utilizadas
🔹 Frontend
HTML5
CSS3
JavaScript
🔹 Backend
Node.js
Express.js
🔹 Base de Datos
MongoDB Atlas
Mongoose
🔹 Herramientas
Visual Studio C
