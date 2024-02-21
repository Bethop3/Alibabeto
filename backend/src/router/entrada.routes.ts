import { GetEntrada } from '../controllers/entrada.controller'
import { Router } from 'express'

const router = Router()

router.get('/', GetEntrada)

export default router
