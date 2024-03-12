import { body } from 'express-validator'

export const validations = {
  create: [
    body('status').isInt().not().isEmpty().withMessage('El campo status debe ser un número entero y no puede estar vacío.'),
    body('imagen').isString().not().isEmpty().withMessage('El campo imagen debe ser una cadena de texto y no puede estar vacío.'),
    body('codigo').isString().not().isEmpty().withMessage('El campo codigo debe ser una cadena de texto y no puede estar vacío.'),
    body('titulo').isString().not().isEmpty().withMessage('El campo titulo debe ser una cadena de texto y no puede estar vacío.'),
    body('descripcion').isString().not().isEmpty().withMessage('El campo descripcion debe ser una cadena de texto y no puede estar vacío.'),
    body('precio').isFloat().not().isEmpty().withMessage('El campo precio debe ser un número de punto flotante y no puede estar vacío.'),
    body('existencias').isInt().not().isEmpty().withMessage('El campo existencias debe ser un número entero y no puede estar vacío.'),
    body('categoriaID').isInt().not().isEmpty().withMessage('El campo CategoriaFK debe ser un número entero y no puede estar vacío.')
  ]
}
