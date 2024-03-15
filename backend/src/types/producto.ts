import { type ProductoAttributes } from '../models/producto'

export type CrearProducto = Omit<ProductoAttributes, 'id' | 'CreatedDate'>

export type EditarProducto = ProductoAttributes

export interface ProductosQuery {
  precioMaximo: number
  categoriaID: number
  categoria: number
  nombre: string
  landing: string
}
