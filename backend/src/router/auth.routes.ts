import { AuthLogin, AuthRegister } from '../controllers/auth.controller'
import { Router } from 'express'

const router = Router()

router.post('/login', AuthLogin)

router.get('/register', AuthRegister)

export default router
