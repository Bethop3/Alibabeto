import { uploadImageCtrl } from '../controllers/upload.controller'
import { Router } from 'express'

const router = Router()
// Crea un enrutador Express

router.post('/create', uploadImageCtrl)

// router.delete('/delete/:id', EliminarUsuarioCtrl)

export default router
