import { GetCategoria } from '../controllers/categoria.controller'

import Router from 'express'

const router = Router()

router.get('/all', GetCategoria)

export default router
