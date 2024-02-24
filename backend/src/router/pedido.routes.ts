import { handleValidationErrors } from '../utils/handleValidationErrors'
import { CreatePedidoCtrl } from '../controllers/pedido.controller'
import { validations } from '../validations/pedidos.validation'
import { Router } from 'express'

const router = Router()

router.post(
  '/create',
  validations.create,
  handleValidationErrors,
  CreatePedidoCtrl
)

export default router
