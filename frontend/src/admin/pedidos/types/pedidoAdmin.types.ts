import { Basic } from "../../../types"

export type Pedido = {
    id: number
    usuarioID?: number
    estadoPedidoID?: number
    direccionEntregaID?: number
    fechaPedido: Date
    importe: number
    iva: number
    total?: number
    estadoPedido: Basic
  }