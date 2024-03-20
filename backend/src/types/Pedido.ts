import { type PedidoAttributes } from '../models/pedido'
import { type PedidoHasProductoAttributes } from '../models/pedido_has_producto'

export type CreatePedidoHasProducto = Pick<PedidoHasProductoAttributes, 'cantidad' | 'productoID' | 'importe' | 'iva' | 'total'>
// {
//   id_producto: number
//   cantidad: number
//   importe: number
//   iva: number
//   total: number
// }

// type PedidoHasProductoAttributes =
// eslint-disable-next-line @typescript-eslint/ban-types
export type CreatePedido = Omit<PedidoAttributes, 'id'> & {
  productos: CreatePedidoHasProducto[]
  payment_id: string
}
