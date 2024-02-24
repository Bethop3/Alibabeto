import { body } from 'express-validator'

export const validations = {
  create: [
    body('cantidad').isInt().not().isEmpty().withMessage('El campo cantidad debe ser un número entero y no puede estar vacío.'),
    body('importe').isFloat().not().isEmpty().withMessage('El campo importe debe ser un número de punto flotante y no puede estar vacío.'),
    body('iva').isFloat().not().isEmpty().withMessage('El campo iva debe ser un número de punto flotante y no puede estar vacío.'),
    body('total').isFloat().not().isEmpty().withMessage('El campo total debe ser un número de punto flotante y no puede estar vacío.'),
    body('productoFK').isInt().not().isEmpty().withMessage('El campo productoFK debe ser un número entero y no puede estar vacío.')
  ]
}
