import express, { Application } from 'express';
import dotenv from 'dotenv'

// AQUI IMPORTAN LOS MODELOS
// import Calificaciones from './models/calificaciones';
// import Carrera from './models/carrera';
// import Materia from './models/materia';
// import Alumno from './models/alumno';

// ROUTERS
import usuariosRouter from './router/usuarios.routes'

// base de datos
import { getConnection } from './database/conection';

// middlewares
// import { MiddlewareTokenValidator } from './middlewares/middlewareTokenValidator';

const app: Application = express();

dotenv.config()

const port = process.env.PORT || 8000;

app.use(express.json())

app.use( "/usuarios", usuariosRouter )

app.listen(port, async () => {
  
  await getConnection()
  
  console.log(`Servidor corriendo en http://localhost:${port}`);
  
});