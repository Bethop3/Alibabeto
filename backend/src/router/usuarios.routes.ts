import { CreateUsuarioCtrl, EditUsuarioCtrl, EliminarUsuarioCtrl, GetUsuarios } from '../controllers/usuario.controller'
import { Router } from 'express'

const router = Router()
// Crea un enrutador Express
router.get('/all', GetUsuarios)

router.post('/create', CreateUsuarioCtrl)

router.put('/edit', EditUsuarioCtrl)

router.delete('/:id', EliminarUsuarioCtrl)

export default router
