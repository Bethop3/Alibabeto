import { handleValidationErrors } from '../utils/handleValidationErrors'
import { ActualizarEstadoPedido, CreatePedidoCtrl, getAllPedidosCtrl, getIdPedidosCtrl } from '../controllers/pedido.controller'
import { validations } from '../validations/pedidos.validation'
import { Router } from 'express'
import { PaymentIntentCtrl } from '../controllers/carrito.controller'

const router = Router()

router.get(
  '/all',
  getAllPedidosCtrl
)
router.get(
  '/id/:id',
  getIdPedidosCtrl
)

router.post(
  '/create',
  validations.create,
  handleValidationErrors,
  CreatePedidoCtrl
)

router.patch(
  '/estado_pedido',
  validations.actualizarEstado,
  handleValidationErrors,
  ActualizarEstadoPedido
)

router.post(
  '/payment_intent',
  PaymentIntentCtrl
)

export default router
