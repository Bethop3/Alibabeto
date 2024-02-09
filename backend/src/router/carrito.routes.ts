import { GetCarrito } from '../controllers/usuario.controller';
import { Router } from 'express';

const router = Router();

router.get('/', GetCarrito);

export default router;
