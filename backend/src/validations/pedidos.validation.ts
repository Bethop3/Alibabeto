import { body } from 'express-validator'

export const validateProductosArray = (value: any): boolean => {
  if (!Array.isArray(value) || value.length === 0) {
    throw new Error('El campo productos debe ser un array con al menos un elemento.')
  }

  for (const producto of value) {
    if (!producto || typeof producto !== 'object' || !producto.id_producto || !producto.cantidad || !producto.importe || !producto.iva || !producto.total) {
      throw new Error('Cada elemento en el array productos debe seguir la estructura requerida.')
    }
  }
  return true
}

export const validations = {
  create: [
    body('direccionEntregaID').isInt().withMessage('El campo direccionEntregaID debe ser un número entero.'),
    body('fechaPedido').isISO8601().toDate().withMessage('El campo fechaPedido debe ser una fecha en formato ISO 8601.'),
    body('importe').isFloat().withMessage('El campo importe debe ser un número de punto flotante.'),
    body('iva').isFloat().withMessage('El campo iva debe ser un número de punto flotante.'),
    body('total').isFloat().withMessage('El campo total debe ser un número de punto flotante.'),
    body('productos').isArray({ min: 1 }).withMessage('El campo productos no puede estar vacío y debe ser un array.')
  ]
}
