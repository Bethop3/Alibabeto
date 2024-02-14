import { GetUsuarios } from '../controllers/usuario.controller';
import { Router } from 'express';

// Crea un enrutador Express
const router = Router();

/**
 * @route GET /usuario
 * @description Ruta para obtener todos los usuarios.
 * @controller GetUsuarios - Controlador que maneja la lógica para obtener usuarios.
 */
router.get('/', GetUsuarios);

// Exporta el enrutador para su uso en otras partes de la aplicación
export default router;
