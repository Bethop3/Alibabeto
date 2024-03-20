import { type Carrito, type CarritoAttributes } from '../models/carrito'
import { type Producto } from '../models/producto'

export type AgregarProductoCarrito = Omit<CarritoAttributes, 'id' | 'is_deleted' | 'is_creado' | 'status' | 'usuarioID'>

export type ProductoCarrito = CarritoAttributes

export interface CarritoResponse {
  productosRelacionados: Producto[]
  carrito: Carrito[]
}

export interface PaymentIntentDTO {
  email: string
  amount: number
  paymentMethodType: string
}
