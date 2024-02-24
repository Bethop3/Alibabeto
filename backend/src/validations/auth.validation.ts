import { body } from 'express-validator'

export const validations = {
  login: [
    body('correo').isString().notEmpty().withMessage('El campo de correo no puede estar vacío y debe ser una cadena.'),
    body('password').isString().notEmpty().withMessage('El campo de contraseña no puede estar vacío y debe ser una cadena.')
  ],
  registroUsuario: [
    body('nombre').optional().isString().notEmpty().withMessage('El campo nombre no puede estar vacío.'),
    body('apellidos').optional().isString().notEmpty().withMessage('El campo apellidos no puede estar vacío.'),
    body('password')
      .optional()
      .isString()
      .notEmpty()
      .isLength({ min: 6 })
      .withMessage('La contraseña debe tener al menos 6 caracteres.'),
    body('correo').isEmail().notEmpty().withMessage('El campo correo debe ser una dirección de correo válida.'),
    body('nombreUsuario').isString().notEmpty().withMessage('El campo nombreUsuario no puede estar vacío.'),
    body('Imagen').isString().notEmpty().withMessage('El campo Imagen no puede estar vacío.')
  ]
}
