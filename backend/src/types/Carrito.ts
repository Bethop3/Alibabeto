import { type CarritoAttributes } from '../models/carrito'

export type AgregarProductoCarrito = Omit<CarritoAttributes, 'id' | 'is_deleted' | 'is_creado' | 'usuarioFK' | 'status'>

export type ProductoCarrito = CarritoAttributes
