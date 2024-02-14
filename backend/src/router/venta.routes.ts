import { GetVentasPorUsuario } from '../controllers/ventas.controller';
import { Router } from 'express';

const router = Router();

router.get( '/', GetVentasPorUsuario );

export default router;
