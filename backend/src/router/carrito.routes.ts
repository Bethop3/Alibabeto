import { Router } from 'express'
import { handleValidationErrors } from '../utils/handleValidationErrors'
import { AgregarProductoCarritoCtrl } from '../controllers/carrito.controller'
import { validations } from '../validations/carrito.validation'

const router = Router()

router.post(
  '/add/producto',
  validations.create,
  handleValidationErrors,
  AgregarProductoCarritoCtrl
)

export default router
