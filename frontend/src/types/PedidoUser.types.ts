import { Basic } from "."

// export type Pedido = {
//     id: number
//     usuarioID?: number
//     estadoPedidoID?: number
//     direccionEntregaID?: number
//     fechaPedido: Date
//     importe: number
//     iva: number
//     total?: number
//   }
  
  export interface Pedido {
    id:                   number;
    usuarioID:            number;
    estadoPedidoID:       number;
    estadoPedido: Basic
    direccionEntregaID:   number;
    fechaPedido:          Date;
    importe:              number;
    iva:                  number;
    total:                number;
    payment_id:           string;
    pedido_has_productos: PedidoHasProducto[];
}

export interface PedidoHasProducto {
    id:               number;
    pedidoID:         number;
    productoID:       number;
    cantidad:         number;
    precio:           string;
    importe:          string;
    iva:              string;
    total:            string;
    estadoProductoID: number;
    producto:         Producto;
}

export interface Producto {
    id:          number;
    status:      number;
    imagen:      string;
    codigo:      string;
    titulo:      string;
    descripcion: string;
    precio:      number;
    existencias: number;
    categoriaID: number;
    CreatedDate: Date;
    is_deleted:  IsDeleted;
}

export interface IsDeleted {
    type: string;
    data: number[];
}
