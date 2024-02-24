import { body } from 'express-validator'

export const validations = {
  create: [
    body('clienteFK').isInt().withMessage('El campo clienteFK debe ser un número entero.'),
    body('estadoPedidoFK').isInt().withMessage('El campo estadoPedidoFK debe ser un número entero.'),
    body('direccionEntregaFK').isInt().withMessage('El campo direccionEntregaFK debe ser un número entero.'),
    body('fechaPedido').isISO8601().toDate().withMessage('El campo fechaPedido debe ser una fecha en formato ISO 8601.'),
    body('importe').isFloat().withMessage('El campo importe debe ser un número de punto flotante.'),
    body('iva').isFloat().withMessage('El campo iva debe ser un número de punto flotante.'),
    body('total').isFloat().withMessage('El campo total debe ser un número de punto flotante.'),
    body('productos').not().isEmpty().isArray().withMessage('El campo productos no puede estar vacío y debe ser un array.')
  ]
}
