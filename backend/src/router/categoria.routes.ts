import { CreateCategory, EditCategoryC, EliminarCategoriaCtrl, GetCategoria, ObtenerCategoriaPorIdCtrl } from '../controllers/categoria.controller'

import Router from 'express'

const router = Router()

router.get('/all', GetCategoria)

router.post('/create',
  CreateCategory)

router.put('/edit',
  EditCategoryC)

router.delete(
  '/:id',
  EliminarCategoriaCtrl
)

router.get('/find/:id',
  ObtenerCategoriaPorIdCtrl)

export default router
