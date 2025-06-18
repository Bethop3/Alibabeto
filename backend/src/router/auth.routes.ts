import { AuthLogin, AuthRegister, AuthValidateSession } from '../controllers/auth.controller'
import { handleValidationErrors } from '../utils/handleValidationErrors'
import { validations } from '../validations/auth.validation'
import { Router } from 'express'

const router = Router()

router.post(
  '/validate-session',
  AuthValidateSession
)

router.post(
  '/login',
  validations.login,
  handleValidationErrors,
  AuthLogin
)

router.post(
  '/registro',
  validations.registroUsuario,
  handleValidationErrors,
  AuthRegister
)

export default router
