import { body } from 'express-validator'

export const validations = {
  create: [
    body('nombre').isString().withMessage('El campo nombre debe ser una cadena de texto.'),
    body('apellidos').isString().withMessage('El campo apellidos debe ser una cadena de texto.'),
    body('password').isString().withMessage('El campo password debe ser una cadena de texto.'),
    body('correo').isEmail().not().isEmpty().withMessage('El campo correo debe ser una dirección de correo electrónico válida y no puede estar vacío.')
    // body('Imagen').isString().withMessage('El campo Imagen debe ser una cadena de texto.')
  ],
  edit: [
    body('id').isInt().not().isEmpty().withMessage('El campo id debe ser un número entero y no puede estar vacío.'),
    body('nombre').isString().withMessage('El campo nombre debe ser una cadena de texto.'),
    body('apellidos').isString().withMessage('El campo apellidos debe ser una cadena de texto.'),
    body('password').isString().withMessage('El campo password debe ser una cadena de texto.'),
    body('correo').isEmail().not().isEmpty().withMessage('El campo correo debe ser una dirección de correo electrónico válida y no puede estar vacío.')
    // body('Imagen').isString().withMessage('El campo Imagen debe ser una cadena de texto.')
  ],
  createDireccion: [
    body('nombreDestinatario').isString().not().isEmpty().withMessage('El campo nombreDestinatario debe ser una cadena de texto y no puede estar vacío.'),
    body('direccion').isString().not().isEmpty().withMessage('El campo direccion debe ser una cadena de texto y no puede estar vacío.'),
    body('ciudad').isString().not().isEmpty().withMessage('El campo ciudad debe ser una cadena de texto y no puede estar vacío.'),
    body('codigoPostal').isString().not().isEmpty().withMessage('El campo codigoPostal debe ser una cadena de texto y no puede estar vacío.'),
    body('pais').isString().not().isEmpty().withMessage('El campo pais debe ser una cadena de texto y no puede estar vacío.'),
    body('telefono').isString().not().isEmpty().withMessage('El campo telefono debe ser una cadena de texto y no puede estar vacío.')
  ]
}
