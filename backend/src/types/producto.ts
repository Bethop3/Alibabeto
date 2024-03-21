import { type Producto, type ProductoAttributes } from '../models/producto'

export type CrearProducto = Omit<ProductoAttributes, 'id' | 'CreatedDate'>

export type EditarProducto = ProductoAttributes

export interface ProductosQuery {
  precioMaximo: number
  categoriaID: number
  categoria: number
  nombre: string
  landing: string
  pagina: number
  orden: string
}

export interface ProductoPorIdResponse {
  producto: Producto
  productosRelacionados: Producto[]
}

export interface ProductoQueryResponse {
  productos: Producto[]
  totalPaginas?: number
}
