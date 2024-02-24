import { body } from 'express-validator'

export const validations = {
  login: [
    body('correo').isString().notEmpty().withMessage('El campo de correo no puede estar vacío y debe ser una cadena.'),
    body('password').isString().notEmpty().withMessage('El campo de contraseña no puede estar vacío y debe ser una cadena.')
  ]
}
