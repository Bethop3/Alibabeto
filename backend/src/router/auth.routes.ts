import { AuthLogin, AuthRegister } from '../controllers/auth.controller'
import { Router } from 'express'
import { validations } from '../validations/auth.validation'
import { handleValidationErrors } from '../utils/handleValidationErrors'

const router = Router()

router.post(
  '/login',
  validations.login,
  handleValidationErrors,
  AuthLogin
)

router.get('/register', AuthRegister)

export default router
