import { type PedidoAttributes } from '../models/pedido'

interface ProductoHasPedido {
  id_producto: number
  cantidad: number
  importe: number
  iva: number
  total: number
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type CreatePedido = Omit<PedidoAttributes, 'id'> & {
  productos: ProductoHasPedido[]
}
