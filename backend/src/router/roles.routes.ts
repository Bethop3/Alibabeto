import { GetRoles } from '../controllers/roles.controller';
import { Router } from 'express';

const router = Router();

/**
 * @route GET /usuario
 * @description Ruta para obtener todos los usuarios.
 * @controller GetUsuarios - Controlador que maneja la lógica para obtener usuarios.
 */
router.get('/', GetRoles);

// Exporta el enrutador para su uso en otras partes de la aplicación
export default router;