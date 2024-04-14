import { handleValidationErrors } from '../utils/handleValidationErrors'
import { CreatePedidoCtrl, getAllPedidosCtrl } from '../controllers/pedido.controller'
import { validations } from '../validations/pedidos.validation'
import { Router } from 'express'
import { PaymentIntentCtrl } from '../controllers/carrito.controller'

const router = Router()

router.get(
  '/all',
  getAllPedidosCtrl
)

router.post(
  '/create',
  validations.create,
  handleValidationErrors,
  CreatePedidoCtrl
)

router.post(
  '/payment_intent',
  PaymentIntentCtrl
)

export default router
