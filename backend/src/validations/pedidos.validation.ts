import { body } from 'express-validator'

export const validations = {
  create: [
    body('clienteFK').isInt(),
    body('estadoPedidoFK').isInt(),
    body('direccionEntregaFK').isInt(),
    body('fechaPedido').isISO8601().toDate(),
    body('importe').isFloat(),
    body('iva').isFloat(),
    body('total').isFloat(),
    body('productos').not().isEmpty().isArray()
  ]
}
