import express, { Application } from 'express';
import dotenv from 'dotenv'

// DB
// import { sequelize } from './database';

// AQUI IMPORTAN LOS MODELOS
// MODELOS
// import Calificaciones from './models/calificaciones';
// import Carrera from './models/carrera';
// import Materia from './models/materia';
// import Alumno from './models/alumno';

// ROUTERS
import carritoRouter from './router/carrito.routes'

const app: Application = express();

dotenv.config()

const port = process.env.PORT || 8000;

app.use(express.json())

app.use("/carrito", carritoRouter)

// const getConnection = async () => {
  
//   try {

//     await sequelize.authenticate();

//     await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');

//     await sequelize.sync();
    
//     await Alumno.sync();
//     await Carrera.sync();
//     await Materia.sync();
//     await Calificaciones.sync();

//     await sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
    
//     console.clear()

//     console.log("Modelos actualizados");

//   } 
//   catch (error) 
//   {
//     console.error('Unable to connect to the database:', error);
//   }

// }

app.listen(port, async () => {
  
//   await getConnection()
  
  console.log(`Servidor corriendo en http://localhost:${port}`);
  
});