// Librerías
import express, { Application } from 'express';
import dotenv from 'dotenv';

// Routers
import usuariosRouter from './router/usuarios.routes';
import productosRouter from './router/producto.routes';

// Base de Datos
import { getConnection } from './database/conection';
import { initModels } from './models/init-models';
import { sequelize } from './database';

// Middlewares
// import { MiddlewareTokenValidator } from './middlewares/middlewareTokenValidator';

// Inicialización de la aplicación Express
const app: Application = express();

// Configuración de variables de entorno
dotenv.config();

// Puerto de la aplicación
const port = process.env.PORT || 8000;

// Middleware para procesar datos en formato JSON
app.use(express.json());

// Rutas
app.use('/producto', productosRouter);
app.use('/usuario', usuariosRouter);

// Inicialización de modelos Sequelize
app.listen(port, async () => {
  
  // Inicialización de modelos Sequelize
  await initModels(sequelize);

  // Conexión a la base de datos
  await getConnection();

  console.log(`Servidor corriendo en http://localhost:${port}`);
  
});
