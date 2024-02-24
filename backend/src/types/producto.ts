import { type ProductoAttributes } from '../models/producto'

export type CrearProducto = Omit<ProductoAttributes, 'id' | 'CreatedDate'>

export type EditarProducto = ProductoAttributes

export interface ProductosQuery {
  nombre: string
  precioMaximo: number
  categoriaID: number
}
