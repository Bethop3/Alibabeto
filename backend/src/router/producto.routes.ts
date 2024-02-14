import { GetProductos } from '../controllers/producto.controller';
import { Router } from 'express';

const router = Router();

router.get( '/', GetProductos );

export default router;
