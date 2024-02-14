import { GetUsuarios } from '../controllers/usuario.controller';
import { Router } from 'express';

const router = Router();

router.get('/', GetUsuarios);

export default router;
