import { CrearProductoC, EditarProductoCtrl, EliminarProductoCtrl, GetProductos } from '../controllers/producto.controller'
import { Router } from 'express'

const router = Router()

router.get('/all',
  GetProductos
)

router.post('/create',
  CrearProductoC)

router.put('/edit',
  EditarProductoCtrl)

router.delete(
  '/:id',
  EliminarProductoCtrl)

export default router
