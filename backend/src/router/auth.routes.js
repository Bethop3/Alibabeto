import { AuthLogin , AuthRegister } from '../controllers/auth.controller';
import { Router } from 'express';

const router = Router();

router.get( '/login', AuthLogin );

router.get( '/register', AuthRegister );

export default router;
