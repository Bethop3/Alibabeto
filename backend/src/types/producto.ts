import { type ProductoAttributes } from '../models/producto'

export type CrearProducto = Omit<ProductoAttributes, 'id'>

export type EditarProducto = ProductoAttributes
