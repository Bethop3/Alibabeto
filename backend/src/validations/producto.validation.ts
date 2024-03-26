import { body } from 'express-validator'

export const validations = {
  create: [
    body('imagen').isString().not().isEmpty().withMessage('El campo imagen debe ser una cadena de texto y no puede estar vacío.'),
    body('codigo').isString().not().isEmpty().withMessage('El campo codigo debe ser una cadena de texto y no puede estar vacío.'),
    body('titulo').isString().not().isEmpty().withMessage('El campo titulo debe ser una cadena de texto y no puede estar vacío.'),
    body('descripcion').isString().not().isEmpty().withMessage('El campo descripcion debe ser una cadena de texto y no puede estar vacío.'),
    body('precio').isFloat().not().isEmpty().withMessage('El campo precio debe ser un número de punto flotante y no puede estar vacío.'),
    body('existencias').isInt().not().isEmpty().withMessage('El campo existencias debe ser un número entero y no puede estar vacío.'),
    body('categoriaID').isInt().not().isEmpty().withMessage('El campo categoriaID debe ser un número entero y no puede estar vacío.')
  ],
  edit: [
    body('id').isNumeric().not().isEmpty().withMessage('El campo id debe ser una número y no puede estar vacío.'),
    body('imagen').isString().not().isEmpty().withMessage('El campo imagen debe ser una cadena de texto y no puede estar vacío.'),
    body('codigo').isString().not().isEmpty().withMessage('El campo codigo debe ser una cadena de texto y no puede estar vacío.'),
    body('titulo').isString().not().isEmpty().withMessage('El campo titulo debe ser una cadena de texto y no puede estar vacío.'),
    body('descripcion').isString().not().isEmpty().withMessage('El campo descripcion debe ser una cadena de texto y no puede estar vacío.'),
    body('precio').isFloat().not().isEmpty().withMessage('El campo precio debe ser un número de punto flotante y no puede estar vacío.'),
    body('existencias').isInt().not().isEmpty().withMessage('El campo existencias debe ser un número entero y no puede estar vacío.'),
    body('categoriaID').isInt().not().isEmpty().withMessage('El campo categoriaID debe ser un número entero y no puede estar vacío.'),
    body('imagenes').isArray().not().isEmpty().withMessage('El campo imagenes no debe ir vacio.'),
    body('imagenesRemove').isArray().not().isEmpty().withMessage('El campo imagenesRemove no debe ir vacio.')
  ]
}
