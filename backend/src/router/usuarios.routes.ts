import {
  CreateDireccionUsuarioCtrl,
  CreateUsuarioCtrl,
  EditUsuarioCtrl,
  EliminarUsuarioCtrl,
  GetUsuarios
} from '../controllers/usuario.controller'
import { Router } from 'express'
import { validations } from '../validations/usuarios.validation'
import { handleValidationErrors } from '../utils/handleValidationErrors'

const router = Router()
// Crea un enrutador Express
router.get('/all', GetUsuarios)

router.post(
  '/create',
  validations.create,
  handleValidationErrors,
  CreateUsuarioCtrl
)

router.post(
  '/create/direccion',
  validations.createDireccion,
  handleValidationErrors,
  CreateDireccionUsuarioCtrl
)

router.put(
  '/edit',
  validations.edit,
  handleValidationErrors,
  EditUsuarioCtrl
)

router.delete('/delete/:id', EliminarUsuarioCtrl)

export default router
