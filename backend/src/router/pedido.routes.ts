import { CreatePedidoCtrl, getPedidosCtrl } from '../controllers/pedido.controller'
import { handleValidationErrors } from '../utils/handleValidationErrors'
import { validations } from '../validations/pedidos.validation'
import { Router } from 'express'

const router = Router()

router.post(
  '/create',
  validations.create,
  handleValidationErrors,
  CreatePedidoCtrl
)

router.get(
  '/all',
  getPedidosCtrl
)

export default router
