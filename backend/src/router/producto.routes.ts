import { CrearProductoC, EditarProductoCtrl, EliminarProductoCtrl, GetProductosByQuery } from '../controllers/producto.controller'
import { Router } from 'express'
import { validations } from '../validations/producto.validation'
import { handleValidationErrors } from '../utils/handleValidationErrors'

const router = Router()

router.get(
  '/query',
  GetProductosByQuery
)

router.post(
  '/create',
  validations.create,
  handleValidationErrors,
  CrearProductoC
)

router.put(
  '/edit',
  EditarProductoCtrl
)

router.delete(
  '/:id',
  EliminarProductoCtrl
)

export default router
